import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service.js';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(private readonly userService: UserService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedException('Missing Authorization Token');
    }

    const userId = +req.params.id;
    const user = this.userService.findOne(userId);

    if (!user || user.password !== token) {
      throw new UnauthorizedException('Invalid token');
    }

    return next.handle();
  }
}
