import { Controller, Get, Post, Param, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listAllMessages(@Res() res: Response): void {
        const messages = [
            { id: 1, text: 'Hello World' },
            { id: 2, text: 'NestJS is great!' },
        ];

        res.status(200).json(messages);
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto): void {
        console.log(body);

    }

    @Get('/:_id')
    getMessage(@Param() params: any): void {
        console.log(params._id);
    }
}
