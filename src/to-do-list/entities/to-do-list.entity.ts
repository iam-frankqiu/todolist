import {
  PrimaryKey,
  Property,
  OneToMany,
  Entity,
  Collection,
  Cascade,
} from '@mikro-orm/core';
import { ObjectType, Field } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import { ToDoItemEntity } from 'src/to-do-item/entities/to-do-item.entity';
import { v4 } from 'uuid';

@Entity()
@ObjectType()
export class ToDoListEntity {
  @PrimaryKey()
  @Field(() => String)
  id: string = v4();

  @Property()
  @Field(() => String)
  @MaxLength(50)
  title: string;

  @OneToMany({
    entity: () => ToDoItemEntity,
    mappedBy: (toDoItem: ToDoItemEntity) => toDoItem.toDoList,
    cascade: [Cascade.ALL],
  })
  @Field(() => [ToDoItemEntity])
  toDoItems = new Collection<ToDoItemEntity>(this);

  constructor({ title }) {
    this.title = title;
  }
}
