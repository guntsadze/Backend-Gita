import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export enum ExpenseCategory {
  FOOD = 'food',
  SPORT = 'sport',
  TECHNIC = 'technic',
  TRAVEL = 'travel',
  SHOPPING = 'shopping',
}
export class CreateExpenseDto {
  @IsEnum(ExpenseCategory, {
    message: `wrong category`,
  })
  category!: ExpenseCategory;

  @IsNotEmpty()
  @IsString()
  productName!: string;

  @IsNotEmpty()
  @IsNumber()
  quantity!: number;

  @IsNotEmpty()
  @IsNumber()
  price!: number;
}
