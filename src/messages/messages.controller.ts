import { Controller, Get, Post, Param, Res } from '@nestjs/common';
import { Response } from 'express';

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
    createMessage(): void {
      console.log('Create message!');
    }

    @Get('/:_id')
    getMessage(@Param() params: any): void {
      console.log(params._id);
    }
}
