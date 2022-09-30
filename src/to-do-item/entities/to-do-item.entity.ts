import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { ObjectType, Field } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { ToDoListEntity } from 'src/to-do-list/entities/to-do-list.entity';
import { v4 } from 'uuid';

@Entity()
@ObjectType()
export class ToDoItemEntity {
  @PrimaryKey()
  @Field(() => String)
  id: string = v4();

  @Property()
  @Field(() => String)
  @MaxLength(200)
  description: string;

  @ManyToOne(() => ToDoListEntity)
  @Field(() => ToDoListEntity)
  toDoList: ToDoListEntity;

  constructor({ toDoList, description }) {
    this.toDoList = toDoList;
    this.description = description;
  }
}
