import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service'
import { LoginUserDto } from './dto/login-user.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    
    @Post('login')
    async login(@Body() loginDto: LoginUserDto): Promise<AuthResponseDto>{
        return this.authService.login(loginDto);
    }
    @Post('register')
    async resgister(@Body() registerDto: RegisterUserDto):Promise<AuthResponseDto>{
        return this.authService.register(registerDto);
    }
}

