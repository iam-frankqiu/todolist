import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PollService } from './poll.service';
import { Poll } from './entities/poll.entity';
import { CreatePollInput } from './dto/create-poll.input';
import { UpdatePollInput } from './dto/update-poll.input';

@Resolver(() => Poll)
export class PollResolver {
  constructor(private readonly pollService: PollService) {}

  @Mutation(() => Poll)
  createPoll(@Args('createPollInput') createPollInput: CreatePollInput) {
    return this.pollService.create(createPollInput);
  }

  @Query(() => [Poll], { name: 'poll' })
  findAll() {
    return this.pollService.findAll();
  }

  @Query(() => Poll, { name: 'poll' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.findOne(id);
  }

  @Mutation(() => Poll)
  updatePoll(@Args('updatePollInput') updatePollInput: UpdatePollInput) {
    return this.pollService.update(updatePollInput.id, updatePollInput);
  }

  @Mutation(() => Poll)
  removePoll(@Args('id', { type: () => Int }) id: number) {
    return this.pollService.remove(id);
  }
}
