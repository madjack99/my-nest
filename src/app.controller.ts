import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  Req,
  Res,
  SetMetadata,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request, Response } from 'express';
import { UserService } from './services/user/user.service.js';
import { UserDTO } from './UserDTO/user.dto.js';
import { AuthGuard } from './guards/auth/auth.guard.js';
import { RoleGuard } from './guards/role/role.guard.js';
import { Roles } from './customDecorators/roles.decorator.js';
import { Role } from './enum/roles.enum.js';
import { TestInterceptor } from './interceptors/test/test.interceptor.js';
import { ResponseTransformInterceptor } from './interceptors/response-transform/response-transform.interceptor.js';
import { UserDataTransformInterceptor } from './interceptors/user-data-transform/user-data-transform.interceptor.js';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor.js';

interface TokenRequest extends Request {
  token?: string;
}

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  @UseInterceptors(AuthInterceptor)
  getData(@Param('id') id: string) {
    const user = this.userService.findOne(+id);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @Post('create')
  @UseInterceptors(UserDataTransformInterceptor)
  create(@Body() userData: any) {
    this.userService.addUser(userData);
    return 'User added successfully';
  }
}
