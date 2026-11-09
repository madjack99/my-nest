import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { AuthController } from './auth/auth.controller.js';
// import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware.js';
import { AuthGuard } from './guards/auth/auth.guard.js';
import { UserController } from './user/user.controller.js';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RoleGuard } from './guards/role/role.guard.js';
import { UserService } from './services/user/user.service.js';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor.js';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
