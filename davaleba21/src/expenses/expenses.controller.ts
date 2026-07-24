import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  getExpenses() {
    return this.expensesService.getExpenses();
  }

  @Post()
  createExpense(@Body() createExpenseDto: CreateExpenseDto) {
    if (!createExpenseDto.productName || createExpenseDto.price === undefined) {
      throw new HttpException(
        'Product name and price are required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.expensesService.createExpense({
      category: createExpenseDto.category,
      productName: createExpenseDto.productName,
      quantity: createExpenseDto.quantity,
      price: createExpenseDto.price,
    });
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.expensesService.getExpenseById(Number(id));
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.expensesService.deleteExpenseById(Number(id));
  }

  @Patch(':id')
  updateById(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    return this.expensesService.updateExpenseById(Number(id), updateExpenseDto);
  }
}
