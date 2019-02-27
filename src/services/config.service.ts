import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { isDefinedAndNotNull } from '../../shared/utilities/object-utilities';

@Injectable()
export class ConfigService {
  private _envConfig: { [key: string]: string } = {
    greeting: 'Hello'
  };

  constructor() {
    let env = process.env.NODE_ENV;
    if (isDefinedAndNotNull(env)) {
      this._envConfig = dotenv.parse(fs.readFileSync(`${env}.env`));
    }
  }

  public get(key: string) {
    return this._envConfig[key];
  }
}