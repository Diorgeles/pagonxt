import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  birth_date: string;
}
