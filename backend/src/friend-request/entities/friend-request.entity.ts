import {
    Entity, Column,
    CreateDateColumn, PrimaryGeneratedColumn,
    UpdateDateColumn, ManyToOne, JoinColumn
} from "typeorm";
import { User } from '../../users/users.entity';

@Entity('friend_requests') 
export class FriendRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.sentRequests, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sender_id' })
    sender: User;

    @ManyToOne(() => User, (user) => user.receivedRequests, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'receiver_id' })
    receiver: User;

    

    @Column({
        type: 'enum',
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
    })
    status: 'pending' | 'accepted' | 'rejected';
    
    @CreateDateColumn({ type: 'timestamp with time zone' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp with time zone' }) 
    updated_at: Date;
}