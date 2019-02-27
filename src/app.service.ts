import { Injectable } from '@nestjs/common';
import { ConfigService } from './services/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
 
  getHello(): string {
    return `${this.configService.get('greeting')} World!`;
  }
}
