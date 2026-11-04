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
} from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request, Response } from 'express';
import { UserService } from './services/user/user.service.js';
import { UserDTO } from './UserDTO/user.dto.js';

interface TokenRequest extends Request {
  token?: string;
}

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: UserDTO) {
    return `User created successfully`
  }

  @Get()
  getAllUsers(): UserDTO[] {
    return this.userService.getAllUsers();
  }
}
