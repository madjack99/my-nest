import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../UserDTO/user.dto.js';

@Injectable()
export class UserService {
  private users: UserDTO[] = [];

  createUser(user: UserDTO): void {
    this.users.push(user);
  }

  getAllUsers(): UserDTO[] {
    return this.users;
  }
}
