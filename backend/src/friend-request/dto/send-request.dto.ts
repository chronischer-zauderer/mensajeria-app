import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class SendRequestDto {
    @IsNumber()
    @IsOptional()
    receiverId:number;

    
    @IsOptional()
    @IsString()
    receiverUsername?: string;
}