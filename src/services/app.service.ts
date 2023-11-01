import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ConfigService } from 'src/config/config.service';
import { User } from 'src/entities/user.entity';
import { Role } from 'src/entities/role.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Role, 'db3')
    private readonly roleRepository: Repository<Role>,
  ) {}

  async getHello(): Promise<string> {
    const name = this.configService.get<string>('name');
    console.log({ name });

    return 'Hello World!';
  }
}
