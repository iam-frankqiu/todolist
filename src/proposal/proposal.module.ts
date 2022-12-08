import { Module } from '@nestjs/common';
import { ProposalService } from './proposal.service';
import { ProposalResolver } from './proposal.resolver';

@Module({
  providers: [ProposalResolver, ProposalService]
})
export class ProposalModule {}
