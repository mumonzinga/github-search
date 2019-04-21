import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('avatar', 'username', 'name', 'bio', 'repositories', 'followers', 'following', 'link', 'date')).toBeTruthy();
  });
});
