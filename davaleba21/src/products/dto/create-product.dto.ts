import { IsEnum, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { ExpenseCategory } from 'src/expenses/dto/create-expense.dto'; // ან შენი Category Enum

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @Min(0)
  quantity!: number;

  @IsEnum(ExpenseCategory)
  category!: ExpenseCategory;
}
