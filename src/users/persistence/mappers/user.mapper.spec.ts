import { UserMapper } from './user.mapper';
import { mockUser, mockUserEntity } from './user.mock-data';

describe('UserMapper', () => {
  describe('toDomain', () => {
    it('should convert an UserEntity to an User domain object', () => {
      const raw = mockUserEntity();

      const result = UserMapper.toDomain(raw);
      const user = mockUser();

      expect(result).toEqual(user);
    });
  });

  describe('toPersistence', () => {
    it('should convert an User domain object to an UserEntity', () => {
      const user = mockUser();
      const result = UserMapper.toPersistence(user);
      const entity = mockUserEntity();
      expect(result).toEqual(entity);
    });
  });
});
