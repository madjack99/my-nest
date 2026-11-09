import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppController } from '../../app.controller.js';
import { Request } from 'express';
import { UserService } from '../../services/user/user.service.js';

interface UserRequest extends Request {
  user: {
    apiKey: string;
    name: string;
    email: string;
  };
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<UserRequest>();
    const apiKey = req.headers?.api_key as string;
    // const user = this.userService.getUsers(apiKey);
    // if (!user) {
    //   throw new UnauthorizedException('Invalid api_key');
    // }

    // req.user = user;

    return true;
  }
}
