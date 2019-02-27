import { Module, DynamicModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { ConfigService } from './services/config.service';
import { isDefinedAndNotNull } from '../shared/utilities/object-utilities';

@Module({
  imports: dynamicModuleImports([
    ngUniversalModuleImport(process.env.NODE_ENV !== undefined)
  ]),
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: ConfigService,
      useValue: new ConfigService()
    }
  ],
})
export class AppModule {}

function ngUniversalModuleImport(init: boolean) {
  if (init) {
    return AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/app-client'),
      bundle: require('../app-server/main.js')
    });
  }
}

function dynamicModuleImports(modules: DynamicModule[]) {
  return modules.filter(isDefinedAndNotNull);
}