import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export class GetUsersDto extends PaginationDto {
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  email?: string;
}
