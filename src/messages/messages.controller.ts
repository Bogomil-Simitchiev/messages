import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor(public messageService: MessageService) { }

    @Get()
    listAllMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        this.messageService.createMessage(body.content);
    }

    @Get('/:_id')
    async getMessage(@Param() params: any) {
        const message = await this.messageService.findOne(params._id);
        if (!message) {
            throw new NotFoundException('Message not found!');
        }

        return message;
    }
}