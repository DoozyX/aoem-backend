import {
  ADMIN_AUTH,
  Api,
  APPROVER_AUTH,
  ARCHIVER_AUTH,
  SUPER_ADMIN_AUTH,
} from '@test/utils';

describe('Auth', () => {
  describe('Admin Users', () => {
    it('should successfully login via super admin auth', () => {
      const api = Api.withLogin(SUPER_ADMIN_AUTH);
      expect(api).toBeDefined();
    });

    it('should successfully login via admin auth', () => {
      const api = Api.withLogin(ADMIN_AUTH);
      expect(api).toBeDefined();
    });

    it('should successfully login via archiver auth', () => {
      const api = Api.withLogin(ARCHIVER_AUTH);
      expect(api).toBeDefined();
    });

    it('should successfully login via approver auth', () => {
      const api = Api.withLogin(APPROVER_AUTH);
      expect(api).toBeDefined();
    });
  });
});
