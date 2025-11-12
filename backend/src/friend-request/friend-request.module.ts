import { Module } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { FriendRequestController } from './friend-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendRequest } from './entities/friend-request.entity';
import { ContactService } from 'src/contact/contact.service';
import { ContactModule } from 'src/contact/contact.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([FriendRequest]),
    ContactModule,
    UsersModule,
  ],
  controllers: [FriendRequestController],
  providers: [FriendRequestService],
  exports: [FriendRequestService],
})
export class FriendRequestModule {}
