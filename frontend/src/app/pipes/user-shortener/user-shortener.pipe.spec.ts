import { UserShortenerPipe } from './user-shortener.pipe';

describe('UserShortenerPipe', () => {
  it('create an instance', () => {
    const pipe = new UserShortenerPipe();
    expect(pipe).toBeTruthy();
  });
});
