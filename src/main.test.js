import request from 'supertest';
import app from './main';

describe('api tests', () => {
  it('should return Hello world /api', () =>
    request(app)
      .get('/api')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
      }));

  it('should return err if path not /api', () =>
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(404);
      }));
});
