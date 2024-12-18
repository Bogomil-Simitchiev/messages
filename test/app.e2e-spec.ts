import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MessagesModule } from '../src/messages/messages.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const messages = [
      { id: 1, text: 'Hello World' },
      { id: 2, text: 'NestJS is great!' },
    ];
    return request(app.getHttpServer())
      .get('/messages')
      .expect(200)
      .expect(messages);
  });
});
