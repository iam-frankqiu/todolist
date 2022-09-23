import { Test, TestingModule } from '@nestjs/testing';
import { ExampleEntityService } from './example-entity.service';

describe('ExampleEntityService', () => {
  let service: ExampleEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleEntityService],
    }).compile();

    service = module.get<ExampleEntityService>(ExampleEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
