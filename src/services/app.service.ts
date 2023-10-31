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

    const user = new User();
    const now = Date.now();
    user.username = `User${now}`;
    user.email = `user${now}@gmail.com`;
    await this.userRepository.save(user);

    const users = await this.userRepository.find({
      take: 3,
    });
    console.log({ users });

    const roles = await this.roleRepository.find({
      take: 3,
    });
    console.log({ roles });

    return 'Hello World!';
  }
}
