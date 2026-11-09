import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class UserDataTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    if (req.method === 'POST') {
      const { id, name, email, password } = req.body;

      if (!id || !name || !email || !password) {
        throw new BadRequestException(
          'A field value is missing, please check again',
        );
      }
    }

    return next.handle().pipe(
      map((data) => {
        if (Array.isArray(data)) {
          return data.map((user) => this.transformUser(user));
        } else if (data && typeof data === 'object') {
          return this.transformUser(data);
        }
        return data;
      }),
      catchError(() =>
        throwError(() => new NotFoundException('Please give a valid id')),
      ),
    );
  }

  private transformUser(user: any): any {
    const { password, ...result } = user;
    return result;
  }
}
