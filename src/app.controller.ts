import {
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
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service.js';
import type { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get(':id')
  getId(@Param('id', new ParseUUIDPipe({ version: '1' })) id: string) {
    return id;
  }
}
