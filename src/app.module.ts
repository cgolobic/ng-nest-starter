import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'client/dist/app-client'),
      bundle: require('./../client/dist/app-server/main.js')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
