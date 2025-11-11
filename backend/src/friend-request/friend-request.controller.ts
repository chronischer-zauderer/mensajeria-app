import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SendRequestDto } from './dto/send-request.dto';
import { FriendRequest } from './entities/friend-request.entity';


@Controller('requests')
@UseGuards(JwtAuthGuard)
export class FriendRequestController {
  constructor(private readonly friendRequestService: FriendRequestService) {}

  @Post()
  async sendRequest(@Body() sendRequestDto: SendRequestDto, @Req() req: any){
    const senderId = req.user.id; 
    const receiverId = sendRequestDto.receiverId; 
    const request = await this.friendRequestService.sendRequest(senderId, receiverId);
    return {
        message: 'Solicitud de amistad enviada exitosamente.',
        data: request,
    };
  }

  @Get()
  async getAllRequest():Promise<FriendRequest[]>{
    return this.friendRequestService.findAll()
  }

  @Get('received')
  async getReceivedRequests(@Req() req: any){
    const receiverId = req.user.id;
    const requests = await this.friendRequestService.getReceivedRequests(receiverId);

    return {
        message: 'Solicitudes recibidas cargadas exitosamente.',
        data: requests,
    };
  }

  @Patch(':id/accept')
  async acceptRequest(@Param('id') requestId: number, @Req() req: any){
    const requestToAcceptId = Number(requestId);
    const userId = req.user.id;
    const acceptedRequest = await this.friendRequestService.acceptRequest(requestToAcceptId,userId)

    return {
            message: 'Solicitud de amistad aceptada y contacto creado.',
            data: acceptedRequest,
        }; 
  }

  @Patch(':id/reject')
  async rejectRequest(@Param('id') requestId: number, @Req() req: any){
    const requestToAcceptId = Number(requestId);
    const userId = req.user.id;
    const rejectRequest = await this.friendRequestService.rejectRequest(requestToAcceptId,userId)

    return {
            message: 'Solicitud de rechazada.',
            data: rejectRequest,
    };
  }

  @Get('sent')
  async getSentRequests(@Req() req: any){
    const userId = req.user.id;
    const getSentRequests = await this.friendRequestService.getSentRequests(userId)
    return {
            message: 'Lista solicitudes enviadas.',
            data: getSentRequests,
    };
  }
}
