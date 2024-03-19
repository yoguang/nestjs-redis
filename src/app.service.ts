import { Injectable, Inject } from '@nestjs/common';
import { RedisClientType } from 'redis';

type SetQueryType = {
  key: string;
  value: string;
};

@Injectable()
export class AppService {
  @Inject('REDIS_CLIENT') // 注入 Redis 模块
  private redisClient: RedisClientType;

  async getHello() {
    try {
      const redis_keys = await this.redisClient.keys('*');
      console.log('redis_keys:', redis_keys);
      return 'Hello Redis! <br/>' + 'Keys: ' + JSON.stringify(redis_keys);
    } catch (error) {
      console.error('getHello Error: ', error);
    }
  }

  async set(query: SetQueryType) {
    try {
      console.log(query);
      const result = await this.redisClient.set(query.key, query.value);
      console.log('set result: ', result);
      return `Redis set ${query.key}=${query.value} result: ${result}`;
    } catch (error) {
      console.error('set Error: ', error);
    }
  }

  async get(key: string) {
    try {
      const result = await this.redisClient.get(key);
      console.log('get value: ', result);
      return `Redis get key:${key} value: ${result}`;
    } catch (error) {
      console.error('get Error: ', error);
    }
  }
}
