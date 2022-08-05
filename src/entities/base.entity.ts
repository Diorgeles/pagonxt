import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn()
  created_at?: string;

  @UpdateDateColumn()
  updated_at?: string;

  @DeleteDateColumn()
  deleted_at?: Date;
}
