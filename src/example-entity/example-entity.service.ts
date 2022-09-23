import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { ExampleEntity } from './entities/example-entity.entity';

@Injectable()
export class ExampleEntityService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleEntityRepository: EntityRepository<ExampleEntity>,
  ) {}

  findAll() {
    return this.exampleEntityRepository.findAll();
  }
}
