import { ConfigModule } from '@nestjs/config';

import dbConfig from './config/db.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfig],
  envFilePath: ['local.env'],
});
export default dbConfig();
