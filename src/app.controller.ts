import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IGreeting } from 'shared/interfaces/greeting';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/hello')
  getHello(): IGreeting {
    return { greeting: this.appService.getHello() };
  }
}
