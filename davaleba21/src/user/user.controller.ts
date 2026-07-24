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
  Query,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query() getUsersDto: GetUsersDto) {
    return this.usersService.getUsers(getUsersDto);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.firstName || !createUserDto.email) {
      throw new HttpException(
        'First name and email is required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.usersService.createUser({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      phoneNumber: createUserDto.phoneNumber,
      gender: createUserDto.gender,
    });
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.usersService.deteleUserById(Number(id));
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserById(Number(id), updateUserDto);
  }
}
