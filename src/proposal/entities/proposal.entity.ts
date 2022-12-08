import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Proposal {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
