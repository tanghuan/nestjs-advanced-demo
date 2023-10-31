import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const name = this.configService.get<string>('name');
    console.log({ name });
    return 'Hello World!';
  }
}
