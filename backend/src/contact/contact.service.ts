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
  // En src/contact/contact.service.ts

  async createContact(user1Id: number, user2Id: number) {
  const userAId = Math.min(user1Id, user2Id);
  const userBId = Math.max(user1Id, user2Id);

  const newContact = this.contactRepo.create({
    userA: { id: userAId },
    userB: { id: userBId },
  });

  return this.contactRepo.save(newContact);
}

  // en src/contact/contact.service.ts

async getContacts(userId: number) {
  const contacts = await this.contactRepo.find({
    where: [
      { userA: { id: userId } },
      { userB: { id: userId } }
    ],
    relations: ['userA', 'userB'],
    select: {
      id: true, 
      userA: {
        id: true,
        username: true,
        nickname: true,
      },
      userB: {
        id: true,
        username: true,
        nickname: true,
      }
    }
  });

  return contacts.map(contact => {
    const otherUser = contact.userA.id === userId ? contact.userB : contact.userA;
    return {
      contactId: contact.id,
      id: otherUser.id,       
      username: otherUser.username,
      nickname: otherUser.nickname,
    };
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
