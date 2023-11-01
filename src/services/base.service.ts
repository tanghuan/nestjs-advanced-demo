import { Repository } from 'typeorm';

export abstract class BaseService<Entity> {
  constructor(private readonly repository: Repository<Entity>) {}

  async findTopN(take: number): Promise<Entity[]> {
    return this.repository.find({
      take,
    });
  }
}
