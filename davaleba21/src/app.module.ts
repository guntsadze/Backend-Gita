import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [UserModule, ExpensesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
