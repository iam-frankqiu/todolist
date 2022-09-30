import { Test, TestingModule } from '@nestjs/testing';
import { ToDoListResolver } from './to-do-list.resolver';
import { ToDoListService } from './to-do-list.service';

describe('ToDoListResolver', () => {
  let resolver: ToDoListResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoListResolver, ToDoListService],
    }).compile();

    resolver = module.get<ToDoListResolver>(ToDoListResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
