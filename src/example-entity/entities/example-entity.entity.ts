import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field } from '@nestjs/graphql';

import { v4 } from 'uuid';

@Entity()
@ObjectType()
export class ExampleEntity {
  @PrimaryKey()
  @Field(() => String)
  id: string = v4();

  @Property()
  @Field(() => Date)
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  @Field(() => Date)
  updatedAt: Date = new Date();

  @Property()
  @Field(() => String)
  exampleTextField: string;
}
