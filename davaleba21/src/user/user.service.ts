import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Gender, GetUsersDto } from './dto/get-users.dto';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: '1@1.com',
      phoneNumber: 121211,
      gender: Gender.MALE,
      subscriptionStartDate: '2026-01-01',
      subscriptionEndDate: '2026-02-01',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: '2@2.com',
      phoneNumber: 121211,
      gender: Gender.FEMALE,
      subscriptionStartDate: '2026-01-01',
      subscriptionEndDate: '2026-02-01',
    },
  ];

  getUsers(query: GetUsersDto) {
    const { page = 1, take = 30, gender, email } = query;

    let filteredUsers = this.users;

    if (gender || email) {
      filteredUsers = filteredUsers.filter((u) => {
        const matchesGender = gender ? u.gender === gender : false;
        const matchesEmail = email ? u.email.startsWith(email) : false;
        return matchesGender || matchesEmail;
      });
    }

    const start = (page - 1) * take;
    const stop = page * take;
    const data = filteredUsers.slice(start, stop);

    return {
      users: data,
      total: filteredUsers.length,
      page,
      limit: take,
    };
  }

  createUser({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
  }: CreateUserDto): IUser {
    const lastId = this.users[this.users.length - 1]?.id || 0;

    const now = new Date();
    const subscriptionStartDate = now.toISOString();

    const endDate = new Date(now);
    endDate.setMonth(endDate.getMonth() + 1);
    const subscriptionEndDate = endDate.toISOString();

    const newUser = {
      id: lastId + 1,
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      subscriptionStartDate,
      subscriptionEndDate,
    };

    this.users.push(newUser);
    return newUser;
  }

  getUserById(userId: number): IUser {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  deteleUserById(userId: number): IUser {
    const index = this.users.findIndex((u) => u.id === userId);
    if (index === -1) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const [deletedUser] = this.users.splice(index, 1);
    return deletedUser;
  }

  updateUserById(userId: number, updateUserDto: UpdateUserDto): IUser {
    const index = this.users.findIndex((u) => u.id === userId);
    if (index === -1) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const updateReq = {};
    if (updateUserDto.firstName) {
      updateReq['firstName'] = updateUserDto.firstName;
    }
    if (updateUserDto.lastName) {
      updateReq['lastName'] = updateUserDto.lastName;
    }
    if (updateUserDto.email) {
      updateReq['email'] = updateUserDto.email;
    }
    if (updateUserDto.phoneNumber) {
      updateReq['phoneNumber'] = updateUserDto.phoneNumber;
    }
    if (updateUserDto.gender) {
      updateReq['gender'] = updateUserDto.gender;
    }

    this.users[index] = {
      ...this.users[index],
      ...updateReq,
    };

    return this.users[index];
  }

  findByEmail(email: string): IUser | undefined {
    return this.users.find((u) => u.email === email);
  }

  upgradeSubscription(id: number): IUser {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const currentEndDate = new Date(user.subscriptionEndDate);
    const now = new Date();
    const baseDate = currentEndDate > now ? currentEndDate : now;

    baseDate.setMonth(baseDate.getMonth() + 1);

    user.subscriptionEndDate = baseDate.toISOString();

    return user;
  }
}
