import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserOutputDto } from './dto/user-output.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @UseGuards(JwtAuthGuard)
  @Get('me') 
  getProfile(@Request() req): UserOutputDto {
  
    return req.user; 
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser(): Promise<User[]>{
    return this.usersService.findAll();
  }
}
