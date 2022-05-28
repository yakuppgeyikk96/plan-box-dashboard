import { Injectable } from '@angular/core';
import { users } from '../mockData';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getCurrentUser(): User {
    return users[0];
  }
}
