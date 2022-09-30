import { Test, TestingModule } from '@nestjs/testing';
import { ToDoItemResolver } from './to-do-item.resolver';
import { ToDoItemService } from './to-do-item.service';

describe('ToDoItemResolver', () => {
  let resolver: ToDoItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoItemResolver, ToDoItemService],
    }).compile();

    resolver = module.get<ToDoItemResolver>(ToDoItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
