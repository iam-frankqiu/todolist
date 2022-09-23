import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateExampleEntityInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  exampleTextField: string;
}
