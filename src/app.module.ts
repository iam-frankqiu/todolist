import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module, NotFoundException } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';
import dbConfig from './config/db.config';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ToDoItemModule } from './to-do-item/to-do-item.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return await configService.get('database');
      },
    }),
    ToDoListModule,
    ToDoItemModule,
  ],
})
export class AppModule {}
