import { User } from './models/user.model';
import { UserDetail } from './models/userDetail.model';

export const users: User[] = [
  {
    id: '5510e711-acd7-441d-9b14-c78133595d53',
    email: 'yakuppgeyik@gmail.com',
    password: '123456',
  },
];

export const userDetails: UserDetail[] = [
  {
    id: '69ef1b2f-1241-4f0f-9064-f17f2d859dfd',
    userId: '5510e711-acd7-441d-9b14-c78133595d53',
    fullName: 'Yakup Geyik',
    userName: 'yakuppgeyikk',
    gender: 'MALE',
  },
];
