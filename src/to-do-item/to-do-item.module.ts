import { Module } from '@nestjs/common';
import { ToDoItemService } from './to-do-item.service';
import { ToDoItemResolver } from './to-do-item.resolver';
import { ToDoItemEntity } from './entities/to-do-item.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ToDoListEntity } from 'src/to-do-list/entities/to-do-list.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [ToDoItemEntity, ToDoListEntity],
    }),
  ],
  providers: [ToDoItemResolver, ToDoItemService],
})
export class ToDoItemModule {}
