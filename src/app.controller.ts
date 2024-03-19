import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/set')
  set(@Query() query: any) {
    return this.appService.set(query);
  }

  @Get('/get')
  get(@Query('key') key: string) {
    return this.appService.get(key);
  }
}
