import { HttpStatus } from '@nestjs/common';

import {
  AuthRegisterLoginDtoLanguageEnum,
  UpdateUserDtoStatusEnum,
  UserStatusEnum,
} from '@test/api_gen';
import {
  Api,
  AuthCredentials,
  getApiError,
  sleep,
  SUPER_ADMIN_AUTH,
  TESTER_AUTH,
} from '@test/utils';

describe('Auth', () => {
  const newUserEmail = `user.${Date.now()}@doozyx.com`;
  const newUserPassword = `Secret-strong-password-1234$`;
  const api = new Api();

  beforeAll(async () => {
    await api.auth.authControllerRegister({
      email: newUserEmail,
      password: newUserPassword,
      language: AuthRegisterLoginDtoLanguageEnum.En,
    });
  });

  describe('Registration', () => {
    it('should fail with existing email', async () => {
      try {
        const res = await api.auth.authControllerRegister({
          email: TESTER_AUTH.email,
          password: TESTER_AUTH.password,
          language: AuthRegisterLoginDtoLanguageEnum.En,
        });
        expect(res).not.toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      }
    });

    it('should successfully register', async () => {
      const res = await api.auth.authControllerRegisterWithHttpInfo({
        email: `new.user.${Date.now()}@doozyx.com`,
        password: 'Secret-pwd-123$',
        language: AuthRegisterLoginDtoLanguageEnum.En,
      });
      expect(res.httpStatusCode).toBe(HttpStatus.CREATED);
    });

    describe('Login', () => {
      let newUserId: number;
      it('should successfully with unconfirmed email', async () => {
        const res = await api.auth.authControllerLogin({
          email: newUserEmail,
          password: newUserPassword,
        });
        expect(res.user.id).toBeDefined();
        expect(res.token).toBeDefined();
        newUserId = res.user.id;
      });

      it('should confirm email', async () => {
        const superAdminApi = await Api.withLogin(SUPER_ADMIN_AUTH);
        const res = await superAdminApi.users.usersControllerUpdate(
          newUserId.toString(),
          {
            status: UpdateUserDtoStatusEnum.Verified,
          },
        );
        expect(res.status).toBe(UserStatusEnum.Verified);
      });

      // describe('Confirm email', () => {
      //   it('should successfully confirm email', async () => {
      //     const hash = await request(mail)
      //       .get('/email')
      //       .then(({ body }) =>
      //         body
      //           .find(
      //             (letter: any) =>
      //               letter.to[0].address.toLowerCase() ===
      //                 newUserEmail.toLowerCase() &&
      //               /.*\?hash\=(\S+).*/g.test(letter.text),
      //           )
      //           ?.text.replace(/.*\?hash\=(\S+).*/g, '$1'),
      //       );

      //     return request(app)
      //       .post('/api/v1/auth/email/confirm')
      //       .send({
      //         hash,
      //       })
      //       .expect(204);
      //   });

      //   it('should fail for already confirmed email', async () => {
      //     const hash = await request(mail)
      //       .get('/email')
      //       .then(({ body }) =>
      //         body
      //           .find(
      //             (letter: any) =>
      //               letter.to[0].address.toLowerCase() ===
      //                 newUserEmail.toLowerCase() &&
      //               /.*\?hash\=(\S+).*/g.test(letter.text),
      //           )
      //           ?.text.replace(/.*\?hash\=(\S+).*/g, '$1'),
      //       );

      //     return request(app)
      //       .post('/api/v1/auth/email/confirm')
      //       .send({
      //         hash,
      //       })
      //       .expect(404);
      //   });
      // });
    });
  });

  describe('Login', () => {
    it('should successfully for user with confirmed email', async () => {
      const res = await api.auth.authControllerLogin({
        email: newUserEmail,
        password: newUserPassword,
      });
      expect(res).toBeDefined();
      expect(res.token).toBeDefined();
      expect(res.refreshToken).toBeDefined();
      expect(res.tokenExpires).toBeDefined();
      expect(res.user.email).toBeDefined();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyUser = res.user as any;
      expect(anyUser.hash).not.toBeDefined();
      expect(anyUser.password).not.toBeDefined();
      expect(anyUser.previousPassword).not.toBeDefined();
    });
  });

  describe('Logged in user', () => {
    it('should retrieve your own profile', async () => {
      const api = await Api.withLogin({
        email: newUserEmail,
        password: newUserPassword,
      });
      const res = await api.auth.authControllerMe();
      expect(res.email).toBeDefined();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anyUser = res as any;
      expect(anyUser.hash).not.toBeDefined();
      expect(anyUser.password).not.toBeDefined();
      expect(anyUser.previousPassword).not.toBeDefined();
    });

    it('should get new refresh token', async () => {
      const api = await Api.withLogin({
        email: newUserEmail,
        password: newUserPassword,
      });
      const refreshApi = Api.withToken(api.loginUser.refreshToken);
      const res = await refreshApi.auth.authControllerRefresh();
      expect(res.token).toBeDefined();
      expect(res.refreshToken).toBeDefined();
      expect(res.tokenExpires).toBeDefined();
    });

    it('should fail on the second attempt to refresh token with the same token', async () => {
      const api = await Api.withLogin({
        email: newUserEmail,
        password: newUserPassword,
      });
      const refreshApi = Api.withToken(api.loginUser.refreshToken);
      const res = await refreshApi.auth.authControllerRefresh();
      expect(res.token).toBeDefined();
      try {
        const res = await refreshApi.auth.authControllerRefresh();
        expect(res).not.toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(error.code).toBe(HttpStatus.UNAUTHORIZED);
      }
    });

    it('should update profile successfully', async () => {
      const api = await Api.withLogin({
        email: newUserEmail,
        password: newUserPassword,
      });

      const newUserNewPassword = 'Strong-password-1234$';

      try {
        const res = await api.auth.authControllerUpdate({
          password: newUserNewPassword,
        });
        expect(res).toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      }

      const res = await api.auth.authControllerUpdate({
        password: newUserNewPassword,
        oldPassword: newUserPassword,
      });

      expect(res).toBeDefined();

      const newApi = await Api.withLogin({
        email: newUserEmail,
        password: newUserNewPassword,
      });
      expect(newApi).toBeDefined();

      const me = await newApi.auth.authControllerMe();
      expect(me.email).toBe(newUserEmail);
    });
  });
});

describe('New user flow', () => {
  const userCredentials = new AuthCredentials(
    `new.user.${Date.now()}@doozyx.com`,
    'Secret-pwd-123$',
  );
  let newUserId: number;
  let newUserToken: string;
  let newUserRefreshToken: string;

  it('should register', async () => {
    const api = new Api();
    const res = await api.auth.authControllerRegisterWithHttpInfo({
      email: userCredentials.email,
      password: userCredentials.password,
      language: AuthRegisterLoginDtoLanguageEnum.En,
    });
    expect(res.httpStatusCode).toBe(HttpStatus.CREATED);
  });

  it('should login', async () => {
    const api = new Api();
    const res = await api.auth.authControllerLogin(userCredentials);
    expect(res.token).toBeDefined();
    newUserId = res.user.id;
    newUserToken = res.token;
    newUserRefreshToken = res.refreshToken;
  });

  it('should be able to resend email', async () => {
    const api = Api.withToken(newUserToken);

    const res = await api.auth.authControllerResendVerifyMailWithHttpInfo();
    expect(res.httpStatusCode).toBe(HttpStatus.OK);
  });

  it('should confirm user email', async () => {
    const superAdminApi = await Api.withLogin(SUPER_ADMIN_AUTH);
    const res = await superAdminApi.users.usersControllerUpdate(
      newUserId.toString(),
      {
        status: UpdateUserDtoStatusEnum.Verified,
      },
    );
    expect(res.status).toBe(UserStatusEnum.Verified);
    // wait till the event is processed for deleting the token
    await sleep(1000);
  });

  it('should invalidate current token', async () => {
    const api = Api.withToken(newUserToken);
    try {
      const res = await api.auth.authControllerMe();
      expect(res).not.toBeDefined();
    } catch (e) {
      const error = getApiError(e);
      expect(error.code).toBe(HttpStatus.UNAUTHORIZED);
    }
  });

  it('should refresh token', async () => {
    const api = Api.withToken(newUserRefreshToken);
    const res = await api.auth.authControllerRefresh();
    expect(res.token).toBeDefined();
    expect(res.refreshToken).toBeDefined();
    newUserToken = res.token;
    newUserRefreshToken = res.refreshToken;
  });

  it('should get profile after refresh', async () => {
    const api = Api.withToken(newUserToken);
    const res = await api.auth.authControllerMe();
    expect(res.email).toBe(userCredentials.email);
  });
});
