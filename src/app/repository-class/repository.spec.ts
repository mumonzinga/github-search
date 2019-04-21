import { Repository } from './repository';

describe('Repository', () => {
  it('should create an instance', () => {
    expect(new Repository('link', 'name', 'description', 'forks', 'license' )).toBeTruthy();
  });
});
