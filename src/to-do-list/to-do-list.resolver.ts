import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ToDoListService } from './to-do-list.service';
import { ToDoListEntity } from './entities/to-do-list.entity';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';

@Resolver(() => ToDoListEntity)
export class ToDoListResolver {
  constructor(private readonly toDoListService: ToDoListService) {}

  @Mutation(() => ToDoListEntity)
  createToDoList(@Args('toDoList') toDoList: CreateToDoListInput) {
    return this.toDoListService.create(toDoList);
  }

  @Query(() => [ToDoListEntity], { name: 'getAllToDoLists' })
  findAll() {
    return this.toDoListService.findAll();
  }

  @Query(() => ToDoListEntity, { name: 'getOneToDoListById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.toDoListService.findOne(id);
  }

  @Mutation(() => ToDoListEntity)
  updateToDoList(@Args('toDoList') toDoList: UpdateToDoListInput) {
    return this.toDoListService.update(toDoList);
  }

  @Mutation(() => ToDoListEntity)
  removeToDoListById(@Args('id', { type: () => String }) id: string) {
    return this.toDoListService.remove(id);
  }
}
