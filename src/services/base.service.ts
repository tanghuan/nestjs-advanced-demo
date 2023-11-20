import { BaseEntity } from 'src/entities/base.entity';
import { BaseRepository } from 'src/repositories/base.repository';

export abstract class BaseService<Entity extends BaseEntity> {
  constructor(private repository: BaseRepository<Entity>) {}

  async findTopN(take: number): Promise<Entity[]> {
    return this.repository.find({
      take,
    });
  }
}
