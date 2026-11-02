import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsController } from './products/products.controller.js';
import { ProductsService } from './products/products.service.js';
import { ProductsModule } from './products/products.module.js';
import { AuthController } from './auth/auth.controller.js';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
