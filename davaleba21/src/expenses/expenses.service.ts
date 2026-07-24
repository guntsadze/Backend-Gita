import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IExpense } from './expense.interface';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  private expenses: IExpense[] = [
    {
      id: 1,
      category: 'Food',
      productName: 'Bread',
      quantity: 2,
      price: 1.5,
      totalPrice: 3,
    },
    {
      id: 2,
      category: 'Electronics',
      productName: 'Mouse',
      quantity: 1,
      price: 25,
      totalPrice: 25,
    },
  ];

  getExpenses(): IExpense[] {
    return this.expenses;
  }

  createExpense({
    category,
    productName,
    quantity,
    price,
  }: CreateExpenseDto): IExpense {
    const lastId = this.expenses[this.expenses.length - 1]?.id || 0;

    const newExpense: IExpense = {
      id: lastId + 1,
      category,
      productName,
      quantity,
      price,
      totalPrice: quantity * price,
    };

    this.expenses.push(newExpense);
    return newExpense;
  }

  getExpenseById(expenseId: number): IExpense {
    const expense = this.expenses.find((e) => e.id === expenseId);
    if (!expense) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }

    return expense;
  }

  deleteExpenseById(expenseId: number): IExpense {
    const index = this.expenses.findIndex((e) => e.id === expenseId);
    if (index === -1) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }

    const [deletedExpense] = this.expenses.splice(index, 1);
    return deletedExpense;
  }

  updateExpenseById(
    expenseId: number,
    updateExpenseDto: UpdateExpenseDto,
  ): IExpense {
    const index = this.expenses.findIndex((e) => e.id === expenseId);
    if (index === -1) {
      throw new HttpException('Expense not found', HttpStatus.NOT_FOUND);
    }

    const updateReq = {};
    if (updateExpenseDto.category) {
      updateReq['category'] = updateExpenseDto.category;
    }
    if (updateExpenseDto.productName) {
      updateReq['productName'] = updateExpenseDto.productName;
    }
    if (updateExpenseDto.quantity !== undefined) {
      updateReq['quantity'] = updateExpenseDto.quantity;
    }
    if (updateExpenseDto.price !== undefined) {
      updateReq['price'] = updateExpenseDto.price;
    }

    const updatedExpense = {
      ...this.expenses[index],
      ...updateReq,
    };

    updatedExpense.totalPrice = updatedExpense.quantity * updatedExpense.price;

    this.expenses[index] = updatedExpense;
    return this.expenses[index];
  }
}
