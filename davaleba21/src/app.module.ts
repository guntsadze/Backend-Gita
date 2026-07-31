import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UserModule, ExpensesModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
