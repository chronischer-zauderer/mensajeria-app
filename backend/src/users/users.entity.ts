import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  username?: string | null;


  @Column({ type: 'varchar', length: 50, nullable: true })
  nickname?: string | null;

  @Column({ type: 'varchar', length: 100, nullable: true, unique: true })
  phone_number?: string | null;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  profile_picture_url?: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password_hash?: string | null;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @Column({ type: 'varchar', length: 20, default: 'offline' })
  status: 'online' | 'away' | 'dnd' | 'offline';

  @Column({ type: 'text', nullable: true })
  bio?: string | null;


  @Column({ type: 'jsonb', nullable: false, default: () => "'{}'::jsonb" })
  preferences: Record<string, any>;

  @Column({ type: 'timestamp with time zone', nullable: true })
  last_password_reset?: Date | null;

  @Column({ type: 'timestamp with time zone', nullable: true })
  last_active?: Date | null;

  @Column({ type: 'jsonb', nullable: false, default: () => "'[]'::jsonb" })
  push_tokens: string[];
}
