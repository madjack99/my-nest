import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './authDto.js';
import { PhoneAuth } from './customPipe/phoneAuth.js';
import { CustomPipe } from './customPipe/CustomPipe.js';

@Controller('auth')
export class AuthController {
  @Get('register/:id')
  @UsePipes(CustomPipe)
  getId(@Param('id') id: number) {
    return {
      data: id,
    };
  }

  @Post('register')
  @UsePipes(PhoneAuth)
  registerUser(@Body() userData: AuthDto) {
    return userData;
  }
}
