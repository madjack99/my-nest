import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    const requestId = 'rq101';

    req.headers['Content-Type'] = 'application/json';
    console.log(`Request headers: ${JSON.stringify(req.headers)}`);
    return next.handle().pipe(
      map((data) => {
        res.setHeader('x-request-id', requestId);
        console.log('Res header ', res.getHeaders());
        return data;
      }),
    );
  }
}
