import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
    async findOne(id: string) {
        const jsonMessages = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(jsonMessages);
        return messages[id];
    }
    async findAll() {
        const jsonMessages = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(jsonMessages);
        return messages;
    }
    async createMessage(content: string) {
        const jsonMessages = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(jsonMessages);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await writeFile('messages.json', JSON.stringify(messages));
    }
}