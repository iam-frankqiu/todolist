import { CreateExampleEntityInput } from './create-example-entity.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateExampleEntityInput extends PartialType(
  CreateExampleEntityInput,
) {
  @Field(() => ID)
  id: string;
}
