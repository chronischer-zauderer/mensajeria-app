-- 1) Tabla users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  nickname VARCHAR(50),
  phone_number VARCHAR(20) UNIQUE,
  profile_picture_url VARCHAR(1024),
  status VARCHAR(20) DEFAULT 'offline', 
  bio TEXT,
  preferences JSONB DEFAULT '{}'::jsonb,
  push_tokens JSONB DEFAULT '[]'::jsonb,
  last_password_reset TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_active TIMESTAMP WITH TIME ZONE
);

-- 2)
CREATE TABLE IF NOT EXISTS friend_requests (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    receiver_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    

    status VARCHAR(20) DEFAULT 'pending' NOT NULL, 
    
    UNIQUE (sender_id, receiver_id), 
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    CHECK (sender_id <> receiver_id)
);

CREATE INDEX idx_friend_requests_receiver ON friend_requests (receiver_id);

-- 3)
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    user_a_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    user_b_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    

    established_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    CHECK (user_a_id < user_b_id),
    UNIQUE (user_a_id, user_b_id)
);

CREATE INDEX idx_contacts_user_a ON contacts (user_a_id);
CREATE INDEX idx_contacts_user_b ON contacts (user_b_id);