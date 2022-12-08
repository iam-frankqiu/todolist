import { Test, TestingModule } from '@nestjs/testing';
import { PollResolver } from './poll.resolver';
import { PollService } from './poll.service';

describe('PollResolver', () => {
  let resolver: PollResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollResolver, PollService],
    }).compile();

    resolver = module.get<PollResolver>(PollResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
