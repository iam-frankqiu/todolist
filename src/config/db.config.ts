import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { Logger } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

const options: MikroOrmModuleSyncOptions = {
  type: 'postgresql',
  host: process.env.POSTGRES_HOST,
  dbName: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  baseDir: process.cwd(),
  entities: ['dist/**/*entity.{ts,js}'],
  entitiesTs: ['src/**/*entity.ts'],
};
export default registerAs('database', () => {
  Logger.log('james');
  Logger.log(process.env.POSTGRES_DB);
  return options;
});
