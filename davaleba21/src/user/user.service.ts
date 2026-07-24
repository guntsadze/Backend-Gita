import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: '2@2.com',
      phoneNumber: 121211,
      gender: Gender.FEMALE,
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
}
