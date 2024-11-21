import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should list all messages', () => {
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;

    controller.listAllMessages(mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    
    expect(mockResponse.json).toHaveBeenCalledWith([
      { id: 1, text: 'Hello World' },
      { id: 2, text: 'NestJS is great!' },
    ]);

  });
});
