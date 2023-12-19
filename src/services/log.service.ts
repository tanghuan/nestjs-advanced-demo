import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Log } from 'src/entities/log.entity';

export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: Repository<Log>,
  ) {}

  log(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }
}
