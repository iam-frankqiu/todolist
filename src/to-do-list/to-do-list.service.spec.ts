import { Test, TestingModule } from '@nestjs/testing';
import { ToDoListService } from './to-do-list.service';

describe('ToDoListService', () => {
  let service: ToDoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoListService],
    }).compile();

    service = module.get<ToDoListService>(ToDoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
