import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ToDoItemService } from './to-do-item.service';
import { ToDoItemEntity } from './entities/to-do-item.entity';
import { CreateToDoItemInput } from './dto/create-to-do-item.input';
import { UpdateToDoItemInput } from './dto/update-to-do-item.input';

@Resolver(() => ToDoItemEntity)
export class ToDoItemResolver {
  constructor(private readonly toDoItemService: ToDoItemService) {}

  @Mutation(() => ToDoItemEntity)
  createToDoItem(
    @Args('toDoListId') toDoListId: string,
    @Args('toDoItem') toDoItem: CreateToDoItemInput,
  ) {
    return this.toDoItemService.create(toDoListId, toDoItem);
  }

  @Query(() => [ToDoItemEntity], { name: 'getAllToDoItems' })
  findAll() {
    return this.toDoItemService.findAll();
  }

  @Query(() => ToDoItemEntity, { name: 'getOneToDoItemById' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.toDoItemService.findOne(id);
  }

  @Mutation(() => ToDoItemEntity)
  updateToDoItem(
    @Args('toDoItem') toDoItem: UpdateToDoItemInput,
    @Args('toDoListId', { nullable: true }) toDoListId: string,
  ) {
    return this.toDoItemService.update(toDoItem, toDoListId);
  }

  @Mutation(() => ToDoItemEntity)
  removeToDoItemById(@Args('id', { type: () => String }) id: string) {
    return this.toDoItemService.remove(id);
  }
}
