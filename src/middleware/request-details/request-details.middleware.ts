import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function requestDetailsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { method, url, body, headers } = req;

  const requestData = {
    method,
    url,
    body,
    userAgent: headers['user-agent'],
    contentType: headers['content-type'],
  };

  res.json(requestData);

  next();
}
