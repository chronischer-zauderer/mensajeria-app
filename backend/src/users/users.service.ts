import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity'; 
import { Repository } from 'typeorm';
import { UserOutputDto } from './dto/user-output.dto';
import { NotFoundException } from '@nestjs/common';

interface CreateUserFields {
  username: string;
  email: string;
  password_hash: string;
  nickname?: string | null;
  phone_number?: string | null;
  profile_picture_url?: string | null;
  bio?: string | null;
}
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}


  async findOneByEmailForAuth(email: string): Promise<User | null> {
    const user = await this.usersRepo.findOne({
      where: { email },
    });

    return user; 
  }

  async findOneByUsernameForAuth(username: string): Promise <User | null> {
    const user = await this.usersRepo.findOne({
      where : { username },
    });
    return user;
  }

  async createUser(fields: CreateUserFields):Promise<User>{
    const newUser = this.usersRepo.create(fields);
    return this.usersRepo.save(newUser);
  }

 
  async mapToUserOutputDto(user: User): Promise<UserOutputDto> {
      const dto = new UserOutputDto();
      dto.id = user.id;
      dto.username = user.username!;
      dto.email = user.email;
      dto.nickname = user.nickname;
      dto.phone_number = user.phone_number;
      dto.profile_picture_url = user.profile_picture_url;
      dto.status = user.status;
      dto.bio = user.bio;
      dto.createdAt = user.created_at;
      dto.lastActive = user.last_active;
      return dto;
  }
}