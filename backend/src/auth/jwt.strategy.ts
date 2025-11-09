import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { UserOutputDto } from '../users/dto/user-output.dto';
import { ConfigService } from '@nestjs/config';

interface JwtPayload {
  username: string;
  sub: number; 
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService, 
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      secretOrKey: configService.get<string>('JWT_SECRET')!,
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