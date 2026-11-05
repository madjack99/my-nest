import { Injectable } from '@nestjs/common';
import { UserDTO } from '../../UserDTO/user.dto.js';
import { Role } from '../../enum/roles.enum.js';

@Injectable()
export class UserService {
  private users = [
    {
      apiKey: 'userA101',
      name: 'UserA',
      email: 'userA@email.com',
      roles: [Role.ADMIN],
    },
    {
      apiKey: 'userB102',
      name: 'UserB',
      email: 'userB@email.com',
      roles: [Role.USER],
    },
    {
      apiKey: 'userC103',
      name: 'UserC',
      email: 'userC@email.com',
      roles: [Role.USER],
    },
  ];

  getUsers(apiKey: string) {
    return this.users.find((user) => user.apiKey === apiKey);
  }

  addUser(user: any) {
    return this.users.push(user);
  }
}
