import { Test, TestingModule } from '@nestjs/testing';
import { OptionResolver } from './option.resolver';
import { OptionService } from './option.service';

describe('OptionResolver', () => {
  let resolver: OptionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptionResolver, OptionService],
    }).compile();

    resolver = module.get<OptionResolver>(OptionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
