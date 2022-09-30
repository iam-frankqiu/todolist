import { Test, TestingModule } from '@nestjs/testing';
import { ToDoItemService } from './to-do-item.service';

describe('ToDoItemService', () => {
  let service: ToDoItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoItemService],
    }).compile();

    service = module.get<ToDoItemService>(ToDoItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
