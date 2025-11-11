import { IsNotEmpty, IsNumber } from "class-validator";

export class SendRequestDto {
    @IsNumber()
    @IsNotEmpty()
    receiverId:number;
}