import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../UserDTO/user.dto.js';
import { Role } from '../../enum/roles.enum.js';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'UserA',
      email: 'userA@email.com',
      password: 'secretKey1',
    },
    {
      id: 2,
      name: 'UserB',
      email: 'userB@email.com',
      password: 'secretKey2',
    },
    {
      id: 3,
      name: 'UserC',
      email: 'userC@email.com',
      password: 'secretKey3',
    },
  ];

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: any) {
    return this.users.push(user);
  }
}
