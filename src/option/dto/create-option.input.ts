import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOptionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
