import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FriendRequest } from './entities/friend-request.entity';
import { Repository } from 'typeorm';
import { ContactService } from 'src/contact/contact.service';



@Injectable()
export class FriendRequestService {
  constructor(
    @InjectRepository(FriendRequest)
    private readonly friendRepo: Repository<FriendRequest>,
    private contactService: ContactService,

  ){}

  async sendRequest(senderId: number, receiverId: number) {
   
    if (senderId === receiverId) {
        throw new BadRequestException('No puedes enviarte una solicitud a ti mismo.');
    }
    const existingRequest = await this.friendRepo
        .createQueryBuilder('request')
        .where('(request.senderId = :sender AND request.receiverId = :receiver)', { sender: senderId, receiver: receiverId })
        .orWhere('(request.senderId = :receiver AND request.receiverId = :sender)', { sender: senderId, receiver: receiverId })
        .andWhere('request.status = :status', { status: 'pending' })
        .getOne();

    if (existingRequest) {
        throw new ConflictException('Ya existe una solicitud de amistad pendiente con este usuario.');
    }
    if(await this.contactService.areFriends(senderId,receiverId)){
       throw new ConflictException('Ya existe son amigos');
    }
    const request = this.friendRepo.create({
        sender: { id: senderId },
        receiver: { id: receiverId },
    });
    return this.friendRepo.save(request);
}
  async findAll():Promise<FriendRequest[]>{
    const requests = this.friendRepo.find()
    return requests;
  }
  async getReceivedRequests(receiverId:number){
    return this.friendRepo.find({
      where : {  
        receiver : {id: receiverId},
        status: 'pending'
       },
       relations:['sender']
    });
  }

  async acceptRequest(requestId: number, userId: number){
    const request = await this.friendRepo.findOne({
      where: {
        id: requestId,
        receiver: { id: userId }, 
        status: 'pending' 
      },
      relations: ['sender', 'receiver'] 
    });

    if(!request){
      throw new NotFoundException('Solicitud no encontrada, no pendiente, o no eres el receptor.');
    }
    await this.contactService.createContact(request.sender.id,request.receiver.id)

    request.status = 'accepted';
    return this.friendRepo.save(request)
  }

  async rejectRequest(requestId: number, userId: number){
    const request = await this.friendRepo.findOne({
      where: {
        id: requestId,
        receiver:{ id: userId },
        status: 'pending'
      },
      relations: ['sender','receiver']
    });

    if(!request){
      throw new NotFoundException('Solicitud no encontrada, no pendiente, o no eres el receptor.');
    }
    request.status = 'rejected'
    return this.friendRepo.save(request)
  }

  async getSentRequests(userId: number){
    return this.friendRepo.find({
      where: {
        sender: {id: userId },
        status: 'pending'
      },
      relations: ['receiver']
    });
  }

  
}
