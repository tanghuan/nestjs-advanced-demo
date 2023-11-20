import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(private readonly userRepository: UserRepository) {
    super(userRepository);
  }
}
