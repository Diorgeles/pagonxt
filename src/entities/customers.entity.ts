import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('customers')
export class Customers extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column('date')
  birth_date: string;

  @Column('timestamp with time zone')
  timezone: string;
}
