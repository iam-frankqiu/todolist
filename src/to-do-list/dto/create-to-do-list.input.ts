import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateToDoListInput {
  @Field(() => String)
  title: string;
}
