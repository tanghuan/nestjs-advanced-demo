import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ unique: true })
  email: string;
}
