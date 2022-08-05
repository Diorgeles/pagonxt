import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Customers } from 'entities/customers.entity';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dtos/CreateCustomer.dto';

@Crud({
  model: {
    type: Customers,
  },
  routes: {
    only: [
      'getManyBase',
      'getOneBase',
      'createOneBase',
      'replaceOneBase',
      'deleteOneBase',
    ],
  },
  dto: {
    create: CreateCustomerDTO,
  },
})
@Controller('customers')
export class CustomersController implements CrudController<Customers> {
  constructor(public service: CustomersService) {}
}
