import { Test, TestingModule } from '@nestjs/testing';
import { ExampleEntityResolver } from './example-entity.resolver';
import { ExampleEntityService } from './example-entity.service';

describe('ExampleEntityResolver', () => {
  let resolver: ExampleEntityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleEntityResolver, ExampleEntityService],
    }).compile();

    resolver = module.get<ExampleEntityResolver>(ExampleEntityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
