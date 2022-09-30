import { Module } from '@nestjs/common';
import { ToDoListService } from './to-do-list.service';
import { ToDoListResolver } from './to-do-list.resolver';
import { ToDoListEntity } from './entities/to-do-list.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([ToDoListEntity])],
  providers: [ToDoListResolver, ToDoListService],
})
export class ToDoListModule {}
