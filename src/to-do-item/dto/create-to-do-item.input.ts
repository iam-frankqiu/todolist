import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateToDoItemInput {
  @Field(() => String)
  description: string;
}
