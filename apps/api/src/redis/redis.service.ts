import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

import Redis from 'ioredis';

@Injectable()
export class RedisService
  implements OnModuleInit, OnModuleDestroy
{
  private readonly client: Redis;

  constructor() {
    this.client = new Redis(
      process.env.REDIS_URL ?? 'redis://localhost:6379',
    );
  }

  async onModuleInit() {
    await this.client.ping();
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  getClient(): Redis {
    return this.client;
  }

  async set(
    key: string,
    value: string,
    ttlSeconds?: number,
  ) {
    if (ttlSeconds) {
      return this.client.set(
        key,
        value,
        'EX',
        ttlSeconds,
      );
    }

    return this.client.set(key, value);
  }

  async get(key: string) {
    return this.client.get(key);
  }

  async delete(key: string) {
    return this.client.del(key);
  }
}