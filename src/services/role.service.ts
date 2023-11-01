import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from './base.service';
import { Role } from 'src/entities/role.entity';

@Injectable()
export class RoleService extends BaseService<Role> {
  constructor(
    @InjectRepository(Role, 'db3')
    private readonly roleRepository: Repository<Role>,
  ) {
    super(roleRepository);
  }
}
