import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user/user.service.js';
import { AuthController } from '../auth/auth.controller.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('user')
export class UserController {

}
