import { Repository } from 'typeorm';

import { BaseEntity } from 'src/entities/base.entity';

export class BaseRepository<
  Entity extends BaseEntity,
> extends Repository<Entity> {
  constructor(repository: Repository<Entity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
