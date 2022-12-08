import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Option {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
