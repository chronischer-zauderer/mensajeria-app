/* 
BEGIN;



-- 1) Tipo ENUM para mensajes
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'message_type') THEN
    CREATE TYPE message_type AS ENUM ('text','image','file','system','reaction','sticker','reply');
  END IF;
END
$$; */

-- 2) Tabla users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  nickname VARCHAR(50),
  phone_number VARCHAR(20) UNIQUE,
  profile_picture_url VARCHAR(1024),
  status VARCHAR(20) DEFAULT 'offline', -- online, away, dnd, offline
  bio TEXT,
  preferences JSONB DEFAULT '{}'::jsonb,
  push_tokens JSONB DEFAULT '[]'::jsonb,
  last_password_reset TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_active TIMESTAMP WITH TIME ZONE
);

/* -- 3) Tabla chats
CREATE TABLE IF NOT EXISTS chats (
  id SERIAL PRIMARY KEY,
  is_group BOOLEAN NOT NULL DEFAULT FALSE,
  name VARCHAR(100),
  owner_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  avatar_url VARCHAR(1024),
  topic TEXT,
  is_public BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); */

/* -- 4) Tabla messages
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  chat_id INTEGER NOT NULL REFERENCES chats(id) ON DELETE CASCADE,
  sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  content TEXT,
  type message_type DEFAULT 'text',
  metadata JSONB DEFAULT '{}'::jsonb,
  reply_to INTEGER REFERENCES messages(id) ON DELETE SET NULL,
  thread_root_id INTEGER REFERENCES messages(id) ON DELETE SET NULL,
  edited_at TIMESTAMP WITH TIME ZONE,
  deleted_at TIMESTAMP WITH TIME ZONE,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  content_tsv tsvector
);

-- 5) Tabla attachments (archivos - imágenes, pdfs, etc)
CREATE TABLE IF NOT EXISTS attachments (
  id SERIAL PRIMARY KEY,
  message_id INTEGER REFERENCES messages(id) ON DELETE CASCADE,
  uploader_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  filename VARCHAR(255),
  url VARCHAR(2048),
  mime_type VARCHAR(100),
  size_bytes INTEGER,
  width INTEGER,
  height INTEGER,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6) Tabla message_reads (read receipts por usuario)
CREATE TABLE IF NOT EXISTS message_reads (
  message_id INTEGER NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  read_at    TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (message_id, user_id)
);

-- 7) Tabla message_reactions
CREATE TABLE IF NOT EXISTS message_reactions (
  message_id INTEGER NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reaction   VARCHAR(50) NOT NULL, -- e.g. '👍','heart','like'
  reacted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (message_id, user_id, reaction)
);

-- 8) Tabla chat_members
CREATE TABLE IF NOT EXISTS chat_members (
  chat_id INTEGER REFERENCES chats(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  role VARCHAR(20) DEFAULT 'member', -- member, admin, owner, moderator
  is_admin BOOLEAN DEFAULT FALSE,
  muted_until TIMESTAMP WITH TIME ZONE,
  notifications_enabled BOOLEAN DEFAULT TRUE,
  last_read_message_id INTEGER REFERENCES messages(id) ON DELETE SET NULL,
  PRIMARY KEY (chat_id, user_id)
);

-- 9) Tabla audit_logs (opcional para trazabilidad)
CREATE TABLE IF NOT EXISTS audit_logs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  action VARCHAR(100) NOT NULL,
  resource_type VARCHAR(50),
  resource_id INTEGER,
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10) Función y trigger para tsvector (búsqueda full-text en messages.content)
CREATE OR REPLACE FUNCTION messages_tsv_trigger() RETURNS trigger AS $$
BEGIN
  NEW.content_tsv := to_tsvector('spanish', coalesce(NEW.content,''));
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

-- Crear trigger que mantenga content_tsv actualizado
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger t
    JOIN pg_class c ON t.tgrelid = c.oid
    WHERE t.tgname = 'messages_tsvector_update' AND c.relname = 'messages'
  ) THEN
    CREATE TRIGGER messages_tsvector_update
      BEFORE INSERT OR UPDATE ON messages
      FOR EACH ROW EXECUTE PROCEDURE messages_tsv_trigger();
  END IF;
END
$$;

-- 11) Trigger para actualizar last_activity_at en chats cuando se inserta un mensaje
CREATE OR REPLACE FUNCTION update_chat_last_activity() RETURNS trigger AS $$
BEGIN
  UPDATE chats SET last_activity_at = NEW.sent_at WHERE id = NEW.chat_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger t
    JOIN pg_class c ON t.tgrelid = c.oid
    WHERE t.tgname = 'messages_update_chat_activity' AND c.relname = 'messages'
  ) THEN
    CREATE TRIGGER messages_update_chat_activity
      AFTER INSERT ON messages
      FOR EACH ROW EXECUTE PROCEDURE update_chat_last_activity();
  END IF;
END
$$;

-- 12) Inicializar content_tsv para filas existentes (si las hubiera)
UPDATE messages SET content_tsv = to_tsvector('spanish', coalesce(content,'')) WHERE content_tsv IS NULL;

-- 13) Índices recomendados
CREATE INDEX IF NOT EXISTS idx_messages_chat_sent_at ON messages (chat_id, sent_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_content_tsv ON messages USING GIN (content_tsv);
CREATE INDEX IF NOT EXISTS idx_users_username_lower ON users (lower(username));
CREATE INDEX IF NOT EXISTS idx_users_email_lower ON users (lower(email));
CREATE INDEX IF NOT EXISTS idx_message_reads_user ON message_reads (user_id, read_at DESC);
CREATE INDEX IF NOT EXISTS idx_message_reactions_message ON message_reactions (message_id);
CREATE INDEX IF NOT EXISTS idx_attachments_uploader ON attachments (uploader_id);
CREATE INDEX IF NOT EXISTS idx_chats_last_activity ON chats (last_activity_at DESC);

-- 14) Constraints útiles / checks
ALTER TABLE users
  ADD CONSTRAINT IF NOT EXISTS users_username_minlen CHECK (char_length(username) >= 3);

COMMIT;

-- =========================
-- FIN: esquema completo
-- =========================
 */