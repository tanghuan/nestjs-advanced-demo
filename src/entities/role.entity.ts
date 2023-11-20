import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({
  name: 'roles',
})
export class Role extends BaseEntity {
  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false, default: true })
  enabled: boolean;
}
