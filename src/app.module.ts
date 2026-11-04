import {
  Get,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsController } from './products/products.controller.js';
import { ProductsService } from './products/products.service.js';
import { ProductsModule } from './products/products.module.js';
import { AuthController } from './auth/auth.controller.js';
import { LoggingMiddleware } from './middleware/logging.middleware.js';
import { TokenMiddleware } from './middleware/token.middleware.js';
import { ContentTypeMiddleware } from './middleware/content-type/content-type.middleware.js';
import { convertMiddleware } from './middleware/convert.middleware.js';
// import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware.js';
import { TimestampMiddleware } from './middleware/timestamp/timestamp.middleware.js';
import { UserService } from './services/user/user.service.js';
import { UserLoggingMiddleware } from './middleware/user-logging/user-logging.middleware.js';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserLoggingMiddleware).forRoutes('*');
  }
}
