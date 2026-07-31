import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/user.service';

@Injectable()
export class SubscriptionGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userEmail =
      request.headers['x-user-email'] || request.headers['email'];

    if (!userEmail) {
      request['isSubscribed'] = false;
      return true;
    }

    const user = this.usersService.findByEmail(userEmail as string);

    if (user && new Date(user.subscriptionEndDate) > new Date()) {
      request['isSubscribed'] = true;
    } else {
      request['isSubscribed'] = false;
    }

    return true;
  }
}
