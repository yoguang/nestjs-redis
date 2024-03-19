import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { createClient } from 'redis';
import { SetController } from './set/set.controller';
import { SetModule } from './set/set.module';
import { HashController } from './hash/hash.controller';
import { HashModule } from './hash/hash.module';
import { ListController } from './list/list.controller';
import { ListModule } from './list/list.module';
import { JsonService } from './json/json.service';
import { JsonController } from './json/json.controller';
import { JsonModule } from './json/json.module';
import { StringService } from './string/string.service';
import { StringModule } from './string/string.module';

@Module({
  imports: [SetModule, HashModule, ListModule, JsonModule, StringModule],
  controllers: [
    AppController,
    SetController,
    HashController,
    ListController,
    JsonController,
  ],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost', // redis ip地址
            port: 6379, // redis 端口
          },
        });
        await client
          .on('ready', () => console.log('Redis Client is ready to use'))
          .connect();
        return client;
      },
    },
    JsonService,
    StringService,
  ],
})
export class AppModule {}
