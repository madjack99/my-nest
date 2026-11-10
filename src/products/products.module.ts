import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './products.service.js';
import { ProductController } from './controller/product/product.controller.js';
import { ProductModule } from './module/product/product.module.js';
import { ProductService } from './service/product/product.service.js';

@Module({
  controllers: [ProductsController, ProductController],
  providers: [ProductsService, ProductService],
  imports: [ProductModule]
})
export class ProductsModule {}
