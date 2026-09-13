import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '../database/prisma.service';
import { RedisService } from '../redis/redis.service';

@Controller('health')
export class HealthController {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  @Get()
  async getHealth() {
    const [database, redis] = await Promise.all([
      this.checkDatabase(),
      this.checkRedis(),
    ]);

    const allUp = database === 'up' && redis === 'up';

    return {
      status: allUp ? 'ok' : 'degraded',
      service: 'api',
      application: this.configService.get<string>('app.name'),
      environment: this.configService.get<string>('app.environment'),
      services: {
        database,
        redis,
      },
      timestamp: new Date().toISOString(),
    };
  }

  private async checkDatabase(): Promise<'up' | 'down'> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return 'up';
    } catch {
      return 'down';
    }
  }

  private async checkRedis(): Promise<'up' | 'down'> {
    try {
      await this.redis.getClient().ping();
      return 'up';
    } catch {
      return 'down';
    }
  }
}