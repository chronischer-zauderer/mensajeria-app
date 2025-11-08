import { UserOutputDto } from '../../users/dto/user-output.dto'

export class AuthResponseDto{
    accessToken : string;
    expiresIn?: number;
    user:UserOutputDto;
}