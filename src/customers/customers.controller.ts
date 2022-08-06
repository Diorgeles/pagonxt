import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { SCondition } from '@nestjsx/crud-request';
import { Customers } from 'entities/customers.entity';
import { CustomersService } from './customers.service';
import { CreateCustomerDTO } from './dtos/CreateCustomer.dto';
import { format } from 'date-fns';

@Crud({
  model: {
    type: Customers,
  },
  routes: {
    only: ['getManyBase', 'createOneBase', 'replaceOneBase', 'deleteOneBase'],
  },
  dto: {
    create: CreateCustomerDTO,
  },
  query: {
    alwaysPaginate: true,
    filter: (search: SCondition) => {
      return search
        ? search
        : {
            $and: [
              {
                birth_date: format(new Date(), 'yyyy-MM-dd'),
              },
              {
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              },
            ],
          };
    },
  },
})
@Controller('customers')
export class CustomersController implements CrudController<Customers> {
  constructor(public service: CustomersService) {}
}
