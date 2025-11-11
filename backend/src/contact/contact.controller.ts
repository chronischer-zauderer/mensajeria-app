import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ContactService } from './contact.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('contact')
@UseGuards(JwtAuthGuard)
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getContacts(@Req() req: any){
    const userId = req.user.id;
    const listCont = await this.contactService.getContacts(userId);

    return {
          message: 'Lista de contactos',
          listCont: listCont,
    }
  }
  @Delete(':contactUserId')
  async removeContact(@Param('contactUserId') ContactId: number,@Req() req: any){
    const userId = req.user.id;
    const ContactIdToNumber = Number(ContactId);
    const deleteUser = await this.contactService.deleteContact(userId,ContactIdToNumber)
    return {
          message: 'usuario eliminado',
          delete: deleteUser
    }
  }
}
