// src/auth/dto/register-user.dto.ts

import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, Length, IsUrl, IsPhoneNumber } from 'class-validator';

export class RegisterUserDto {
    
    @IsString()
    @IsNotEmpty()
    @Length(3, 50) 
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8) 
    password: string; 

    
    @IsString()
    @IsOptional()
    @Length(3, 50)
    nickname?: string;
    

    @IsUrl()
    @IsOptional()
    profile_picture_url?: string; 
    
    @IsString()
    @IsOptional()
    @Length(1, 255)
    bio?: string;


    @IsString()
    @IsOptional()
    @Length(5, 20)
    phone_number?: string;

}