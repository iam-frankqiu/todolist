import { Module } from '@nestjs/common';
import { ExampleEntityService } from './example-entity.service';
import { ExampleEntityResolver } from './example-entity.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ExampleEntity } from './entities/example-entity.entity';

@Module({
  imports: [MikroOrmModule.forFeature([ExampleEntity])],
  providers: [ExampleEntityResolver, ExampleEntityService],
})
export class ExampleEntityModule {}
