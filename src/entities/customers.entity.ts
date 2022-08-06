import { Entity, Column, BeforeInsert, Generated } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('customers')
export class Customers extends BaseEntity {
  @Column()
  @Generated('uuid')
  user_id: number;

  @Column()
  name: string;

  @Column({
    type: 'date',
  })
  birth_date: Date;

  @Column()
  timezone: string;

  @BeforeInsert()
  async saveTimeZone() {
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
}
