import { Gender } from './dto/get-users.dto';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  gender?: Gender;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
}
