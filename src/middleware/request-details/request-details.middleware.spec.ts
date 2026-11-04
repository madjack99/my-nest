import { RequestDetailsMiddleware } from './request-details.middleware.js';

describe('RequestDetailsMiddleware', () => {
  it('should be defined', () => {
    expect(new RequestDetailsMiddleware()).toBeDefined();
  });
});
