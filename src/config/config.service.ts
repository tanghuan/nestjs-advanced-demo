import { Injectable } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export class ConfigService {
  get<T>(setting: string): T {
    return config.get<T>(setting);
  }

  has(setting: string): boolean {
    return config.has(setting);
  }
}
