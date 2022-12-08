import { Test, TestingModule } from '@nestjs/testing';
import { ProposalResolver } from './proposal.resolver';
import { ProposalService } from './proposal.service';

describe('ProposalResolver', () => {
  let resolver: ProposalResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProposalResolver, ProposalService],
    }).compile();

    resolver = module.get<ProposalResolver>(ProposalResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
