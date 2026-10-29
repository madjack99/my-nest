import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsController } from './products/products.controller.js';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
