import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProposalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
