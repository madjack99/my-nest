import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { RoleGuard } from './guards/role/role.guard.js';
import { AuthGuard } from './guards/auth/auth.guard.js';
import { UserService } from './services/user/user.service.js';
import { UserDataTransformInterceptor } from './interceptors/user-data-transform/user-data-transform.interceptor.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalInterceptors(new UserDataTransformInterceptor());

  await app.listen(process.env.PORT ?? 5000);
}
await bootstrap();
