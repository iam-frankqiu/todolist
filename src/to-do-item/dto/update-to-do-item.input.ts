import { CreateToDoItemInput } from './create-to-do-item.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateToDoItemInput extends PartialType(CreateToDoItemInput) {
  @Field(() => String)
  id: string;

  @Field(() => String)
  description: string;
}
