import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from './base.repository';
import { Role } from 'src/entities/role.entity';

export class RoleRepository extends BaseRepository<Role> {
  constructor(
    @InjectRepository(Role, 'db3')
    private readonly ruleRepository: Repository<Role>,
  ) {
    super(ruleRepository);
  }
}
