import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ExampleEntityService } from './example-entity.service';
import { ExampleEntity } from './entities/example-entity.entity';
import { CreateExampleEntityInput } from './dto/create-example-entity.input';
import { UpdateExampleEntityInput } from './dto/update-example-entity.input';

@Resolver(() => ExampleEntity)
export class ExampleEntityResolver {
  constructor(private readonly exampleEntityService: ExampleEntityService) {}

  @Query(() => [ExampleEntity], { name: 'exampleEntities' })
  findAll() {
    return this.exampleEntityService.findAll();
  }
}
