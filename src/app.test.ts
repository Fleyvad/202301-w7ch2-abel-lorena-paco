import request from 'supertest';
import app from './app';

describe('Given an app', () => {
  test('When the server then the app should respond with a mesage', async () => {
    const res = await request(app).get('/');
    expect(res.body).toEqual({ hello: 'World' });
  });
});
