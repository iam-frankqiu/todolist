import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { ToDoListEntity } from 'src/to-do-list/entities/to-do-list.entity';
import { validateEntity, failHandler } from 'src/utils';
import { CreateToDoItemInput } from './dto/create-to-do-item.input';
import { UpdateToDoItemInput } from './dto/update-to-do-item.input';
import { ToDoItemEntity } from './entities/to-do-item.entity';

@Injectable()
export class ToDoItemService {
  constructor(
    @InjectRepository(ToDoItemEntity)
    private readonly toDoItemEntityRepository: EntityRepository<ToDoItemEntity>,
    @InjectRepository(ToDoListEntity)
    private readonly toDoListEntityRepository: EntityRepository<ToDoListEntity>,
  ) {}

  // validate to do item in creating and updating
  async validateToDoItem(toDoListId, data) {
    const toDoList = await this.toDoListEntityRepository.findOneOrFail(
      toDoListId,
      {
        failHandler,
      },
    );
    await validateEntity(ToDoItemEntity, data);
    return toDoList;
  }

  async create(toDoListId: string, data: CreateToDoItemInput) {
    const toDoList = await this.validateToDoItem(toDoListId, data);
    const toDoItem = new ToDoItemEntity({ toDoList, ...data });
    toDoList.toDoItems.add(toDoItem);
    await this.toDoListEntityRepository.flush();
    return toDoItem;
  }

  async findAll() {
    return await this.toDoItemEntityRepository.findAll({
      populate: ['toDoList'],
    });
  }

  async findOne(id: string) {
    return await this.toDoItemEntityRepository.findOneOrFail(id, {
      failHandler,
      populate: ['toDoList'],
    });
  }

  async update(item: UpdateToDoItemInput, toDoListId: string) {
    const toDoItem = await this.toDoItemEntityRepository.findOneOrFail(
      item?.id,
      {
        failHandler,
        populate: ['toDoList'],
      },
    );
    /*
    if toDoListId is existed, then update both toDoItem and toDoListId
    if toDoListId isn't existed, then just update toDoItem
    */
    if (toDoListId) {
      const toDoList = await this.validateToDoItem(toDoListId, item);
      wrap(toDoItem).assign({ toDoList, ...item });
    } else {
      wrap(toDoItem).assign({ ...item });
    }
    await this.toDoItemEntityRepository.flush();
    return toDoItem;
  }

  async remove(id: string) {
    const toDoItem = await this.toDoItemEntityRepository.findOneOrFail(id, {
      failHandler,
      populate: ['toDoList'],
    });
    await this.toDoItemEntityRepository.removeAndFlush(toDoItem);
    return toDoItem;
  }
}
