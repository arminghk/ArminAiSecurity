import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getHealth() {
    return {
      status: 'ok',
      service: 'api',
      application: this.configService.get<string>('app.name'),
      environment: this.configService.get<string>('app.environment'),
      timestamp: new Date().toISOString(),
    };
  }
}