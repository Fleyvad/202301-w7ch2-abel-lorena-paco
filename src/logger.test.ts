import log from './logger';
import bunyan from 'bunyan';
describe('Given a log function from logger', () => {
  test('When a log is instace of bunyan library', () => {
    expect(log).toBeInstanceOf(bunyan);
  });
});
