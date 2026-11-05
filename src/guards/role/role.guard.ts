import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../../enum/roles.enum.js';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get<Role[]>('roles', context.getHandler());
    console.log("🚀 ~ RoleGuard ~ canActivate ~ role:", role)

    if (!role) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    if (!user || !user.roles) {
      throw new ForbiddenException('User roles are missing');
    }

    const hasRole = role.some((role) => user.roles.includes(role));
    if (!hasRole) {
      throw new ForbiddenException('Operation is forbidden');
    }

    return true;
  }
}
