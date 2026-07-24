import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: '1@1.com',
      phoneNumber: '1234567890',
      gender: 'male',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: '2@2.com',
      phoneNumber: '1234567890',
      gender: 'female',
    },
  ];

  getUsers(): IUser[] {
    return this.users;
  }

  createUser({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
  }: CreateUserDto): IUser {
    const lastId = this.users[this.users.length - 1]?.id || 0;

    const newUser = {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      id: lastId + 1,
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

    this.users[index] = {
      ...this.users[index],
      ...updateReq,
    };

    return this.users[index];
  }
}
