import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { UserOutputDto } from 'src/users/dto/user-output.dto';
import { User } from '../users/users.entity'
import { RegisterUserDto } from './dto/register-user.dto';


@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    

    async login(loginDto: LoginUserDto): Promise<AuthResponseDto>{
        const user = await this.validateUser(loginDto.email,loginDto.password);
        return this.generateToken(user);
    }

    async validateUser(email: string, pass: string): Promise<User> {

        //implementar findOneByEmail en user.service
        const user = await this.userService.findOneByEmailForAuth(email);

        if(!user){
            throw new UnauthorizedException('Invalid credentials')
        }

        const isPasswordValid = await bcrypt.compare(pass, user.password_hash)

        if(!isPasswordValid){
            throw new UnauthorizedException('Invalid credentials')
        }

        return user;
    }

    async generateToken(user: User): Promise<AuthResponseDto>{
        const payload = {
            username : user.username,
            sub: user.id,
        };

        const userDto = await this.userService.mapToUserOutputDto(user);

        return {
            accessToken: this.jwtService.sign(payload),
            user: userDto,
        }
    }

    async register(registerDto : RegisterUserDto):Promise<AuthResponseDto>{
        await this.checkUserExistence(registerDto.email, registerDto.username);

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(registerDto.password,salt)

        const newUser = await this.userService.createUser({
            username: registerDto.username,
            email: registerDto.email,
            passwordHash: passwordHash,
            nickname: registerDto.nickname || null,
            phone_number: registerDto.phone_number || null,
            profile_picture_url: registerDto.profile_picture_url || null,
            bio:registerDto.bio || null,

        });
        return this.generateToken(newUser);
    }

    private async checkUserExistence(email: string, username: string):Promise<void>{
        const existingEmailUser = await this.userService.findOneByEmailForAuth(email);
        if(existingEmailUser){
            throw new ConflictException('Email already in use.');
        }

        const existingUsernameUser = await this.userService.findOneByUsernameForAuth(username);
        if(existingUsernameUser){
             throw new ConflictException('Username already taken.');
        }
    }


}
