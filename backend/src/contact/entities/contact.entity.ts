import { userInfo } from "os";
import { User } from "src/users/users.entity";
import { 
    Column,
    CreateDateColumn,
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn
} 
from "typeorm";

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> User, (user)=>user.contactsAsA, {onDelete: 'CASCADE'})
    @JoinColumn({name:'useruser_a_id'})
    userA: User;

    @ManyToOne(() => User, (user) => user.contactsAsB, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_b_id' })
    userB: User;

    @CreateDateColumn({ type: 'timestamp with time zone', name: 'established_at' })
    established_at: Date;
}
