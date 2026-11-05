import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
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
} from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request, Response } from 'express';
import { UserService } from './services/user/user.service.js';
import { UserDTO } from './UserDTO/user.dto.js';
import { AuthGuard } from './guards/auth/auth.guard.js';
import { RoleGuard } from './guards/role/role.guard.js';
import { Roles } from './customDecorators/roles.decorator.js';
import { Role } from './enum/roles.enum.js';

interface TokenRequest extends Request {
  token?: string;
}

@Controller('admin')
@UseGuards(RoleGuard)
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('user')
  @Roles(Role.USER)
  getUser(@Req() req: any) {
    const data = req.user;
    const { apiKey, ...userData } = data;
    return `${data.name} data: ${JSON.stringify(userData, null, 4)}`;
  }

  @Post('create')
  @Roles(Role.ADMIN, Role.USER)
  create(@Body() userData: any) {
    this.userService.addUser(userData);

    return 'User added successfully';
  }
}
