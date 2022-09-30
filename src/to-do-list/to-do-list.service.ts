import { EntityRepository, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { validateEntity, failHandler } from 'src/utils';
import { CreateToDoListInput } from './dto/create-to-do-list.input';
import { UpdateToDoListInput } from './dto/update-to-do-list.input';
import { ToDoListEntity } from './entities/to-do-list.entity';

@Injectable()
export class ToDoListService {
  constructor(
    @InjectRepository(ToDoListEntity)
    private readonly toDoListEntityRepository: EntityRepository<ToDoListEntity>,
  ) {}

  async create(data: CreateToDoListInput) {
    await validateEntity(ToDoListEntity, data);
    const toDoList = this.toDoListEntityRepository.create(data);
    await this.toDoListEntityRepository.persistAndFlush(toDoList);
    return toDoList;
  }

  async findAll() {
    return this.toDoListEntityRepository.findAll({
      populate: ['toDoItems'],
    });
  }

  async findOne(id: string) {
    return await this.toDoListEntityRepository.findOneOrFail(id, {
      failHandler,
      populate: ['toDoItems'],
    });
  }

  async update(list: UpdateToDoListInput) {
    await validateEntity(ToDoListEntity, list);
    const toDoList = await this.toDoListEntityRepository.findOneOrFail(
      list?.id,
      {
        failHandler,
        populate: ['toDoItems'],
      },
    );
    wrap(toDoList).assign(list);
    await this.toDoListEntityRepository.flush();
    return toDoList;
  }

  async remove(id: string) {
    const toDoList = await this.toDoListEntityRepository.findOneOrFail(id, {
      failHandler,
      populate: ['toDoItems'],
    });
    await this.toDoListEntityRepository.removeAndFlush(toDoList);
    return toDoList;
  }
}
