import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IGreeting } from 'shared/interfaces/greeting';
import { logMessage } from '../shared/utilities/logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/hello')
  getHello(): IGreeting {
    logMessage('API', 'Calling hello...');
    return { greeting: this.appService.getHello() };
  }
}
