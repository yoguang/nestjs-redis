# Nest + Redis 基本命令操作

## 开始
###  安装 Redis 依赖库

```
pnpm add -S redis
```
### 添加 module 到 App.module.ts 中

```
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { createClient } from 'redis'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost', // redis ip地址
            port: 6379    // redis 端口
          }
        })
        await client.connect()
        return client
      }
    }
  ]
})
export class AppModule {}
```

### 使用 Redis
> 直接在 Service 中使用
```
   const redis_keys = await this.redisClient.keys('*');
   const setKey = await this.redisClient.set("aaa", "111");
   const getKey = await this.redisClient.get("aaa");
```