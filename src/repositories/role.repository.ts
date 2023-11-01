import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/entities/role.entity';
import { Repository } from 'typeorm';

export class RoleRepository {
  constructor(
    @InjectRepository(Role, 'db3')
    private readonly repository: Repository<Role>,
  ) {}
}
