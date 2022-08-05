import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Customers } from 'entities/customers.entity';

@Injectable()
export class CustomersService extends TypeOrmCrudService<Customers> {
  constructor(@InjectRepository(Customers) repo) {
    super(repo);
  }
}
