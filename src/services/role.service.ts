import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Role } from 'src/entities/role.entity';
import { RoleRepository } from 'src/repositories/role.repository';

@Injectable()
export class RoleService extends BaseService<Role> {
  constructor(private readonly roleRepository: RoleRepository) {
    super(roleRepository);
  }
}
