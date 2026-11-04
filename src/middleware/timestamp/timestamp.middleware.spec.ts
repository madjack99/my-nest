import { TimestampMiddleware } from './timestamp.middleware.js';

describe('TimestampMiddleware', () => {
  it('should be defined', () => {
    expect(new TimestampMiddleware()).toBeDefined();
  });
});
