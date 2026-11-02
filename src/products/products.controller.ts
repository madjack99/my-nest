import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { Product } from './products.model.js';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Post()
  addProducts(
    @Body('title') pTitle: string,
    @Body('description') pDesc: string,
    @Body('price') pPrice: number,
  ) {
    const returnedId = this.productService.insertProduct(pTitle, pDesc, pPrice);

    return { id: returnedId };
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() productData: Product) {
    const updatedProduct = this.productService.updateProduct(id, productData);
    return updatedProduct;
  }

  @Patch(':id')
  partialUpdateProduct(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ) {
    const updatedProduct = this.productService.partialUpdate(id, productData);
    return updatedProduct;
  }

  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    this.productService.removeProduct(id);
    return { message: 'Product deleted successfully' };
  }
}
