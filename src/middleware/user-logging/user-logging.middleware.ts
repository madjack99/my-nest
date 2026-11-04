import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from '../../services/user/user.service.js';
import bcrypt from 'bcrypt';
import { UserDTO } from '../../UserDTO/user.dto.js';

@Injectable()
export class UserLoggingMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (req.body && req.body.name) {
      req.body.name = req.body.name.toUpperCase();
    }

    if (req.body && req.body.name && req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const createUserDTO: UserDTO = {
        name: req.body.name,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      };

      this.userService.createUser(createUserDTO);
    }

    next();
  }
}
