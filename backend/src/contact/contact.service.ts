import { Injectable, NotFoundException } from '@nestjs/common';
import {  NumericType, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';



@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepo: Repository<Contact>,
  ){}
  async createContact(userA: number, UserB: number){
    const newContact = this.contactRepo.create({
      userA: {id: userA},
      userB: {id:UserB},
    });
    return this.contactRepo.save(newContact)
  }

  async getContacts(userId:number){
    return this.contactRepo.find({
      where: [
        {userA: {id: userId}},
        {userB: {id:userId},}
      ],
      relations: ['userA','userB']
    });
  }
  async deleteContact(userId:number,contact:number){
    const userAId = Math.min(userId, contact);
    const userBId = Math.max(userId, contact);
    const user = await this.contactRepo.findOne({
      where:{ 
        userA: {
          id:userAId
        },
        userB:{
          id:userBId
        }
     },relations:['userA','userB']
    });

    if(!user){
      throw new NotFoundException('no se puede borrar id incorrecto o inexistente')
    }
    return this.contactRepo.remove(user)
  }

  async areFriends(user1Id: number, user2Id: number): Promise<boolean> {
    const userAId = Math.min(user1Id, user2Id);
    const userBId = Math.max(user1Id, user2Id);
    
    const contact = await this.contactRepo.findOne({
        where: {
            userA:{id: userAId},
            userB:{id: userBId}
        }
    });
    return !!contact;
  }
}
