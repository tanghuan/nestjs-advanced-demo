import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({
  name: 'logs',
})
export class Log extends BaseEntity {
  @Column()
  content: string;
}
