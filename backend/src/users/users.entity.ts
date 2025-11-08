import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length: 100, unique: true})
    email : string;

    @Column({ length : 50, nullable : true})
    username : string;

    @Column({ length : 50, nullable : true})
    nickname : string | null;

    @Column({ length : 100, nullable : true, unique: true})
    phone_number : string | null;

    @Column({ length : 1024, nullable: true})
    profile_picture_url : string | null;

    @Column({ length : 255, nullable : true})
    password_hash : string;

    @CreateDateColumn({ type: 'timestamp with time zone' })
    created_at: Date;

    @Column({ length: 20, default: 'offline' })
    status: 'online' | 'away' | 'dnd' | 'offline';

    @Column({ type: 'text', nullable: true })
    bio: string | null;

    @Column({ type: 'jsonb', default: {} })
    preferences: Record<string, any>;

    @Column({ type: 'timestamp with time zone', nullable: true })
    last_password_reset: Date;

    @Column({ type: 'timestamp with time zone', nullable: true })
    last_active: Date;
    
    @Column({ type: 'jsonb', default: [] })
    push_tokens: string[];
}