import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { UserOutputDto } from '../users/dto/user-output.dto';

interface JwtPayload {
  username: string;
  sub: number; 
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      secretOrKey: 'julionicher',
    });
  }

  async validate(payload: JwtPayload): Promise<UserOutputDto> {
    
    const userDto = await this.usersService.findOneById(payload.sub); 

    if (!userDto) {
      throw new UnauthorizedException()
    }

    return userDto; 
  }
}