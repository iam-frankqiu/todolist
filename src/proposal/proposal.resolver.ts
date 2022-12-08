import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProposalService } from './proposal.service';
import { Proposal } from './entities/proposal.entity';
import { CreateProposalInput } from './dto/create-proposal.input';
import { UpdateProposalInput } from './dto/update-proposal.input';

@Resolver(() => Proposal)
export class ProposalResolver {
  constructor(private readonly proposalService: ProposalService) {}

  @Mutation(() => Proposal)
  createProposal(@Args('createProposalInput') createProposalInput: CreateProposalInput) {
    return this.proposalService.create(createProposalInput);
  }

  @Query(() => [Proposal], { name: 'proposal' })
  findAll() {
    return this.proposalService.findAll();
  }

  @Query(() => Proposal, { name: 'proposal' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.proposalService.findOne(id);
  }

  @Mutation(() => Proposal)
  updateProposal(@Args('updateProposalInput') updateProposalInput: UpdateProposalInput) {
    return this.proposalService.update(updateProposalInput.id, updateProposalInput);
  }

  @Mutation(() => Proposal)
  removeProposal(@Args('id', { type: () => Int }) id: number) {
    return this.proposalService.remove(id);
  }
}
