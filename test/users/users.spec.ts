import { HttpStatus } from '@nestjs/common';
import {
  AuthRegisterLoginDtoLanguageEnum,
  AuthRegisterLoginDtoTypeEnum,
  CreateIndividualUserDtoLanguageEnum,
  CreateIndividualUserDtoRoleEnum,
  CreateIndividualUserDtoStatusEnum,
  CreateUserDtoLanguageEnum,
  CreateUserDtoRoleEnum,
  CreateUserDtoStatusEnum,
  CreateUserDtoTypeEnum,
  DocumentDtoTypeEnum,
  User,
  UserStatusEnum,
} from '@test/api_gen';
import { Api, getApiError, SUPER_ADMIN_AUTH } from '@test/utils';

describe('Users Module', () => {
  let superApi: Api;

  beforeAll(async () => {
    superApi = await Api.withLogin(SUPER_ADMIN_AUTH);
  });

  describe('Update', () => {
    let newUser: User;
    const newUserEmail = `user-first.${Date.now()}@doozyx.com`;
    const newUserChangedEmail = `user-first-changed.${Date.now()}@doozyx.com`;
    const newUserPassword = `Secret-pwd-123$`;
    const newUserChangedPassword = `New-secret-PW-1234$`;

    beforeAll(async () => {
      await superApi.auth.authControllerRegister({
        email: newUserEmail,
        password: newUserPassword,
        type: AuthRegisterLoginDtoTypeEnum.Individual,
        language: AuthRegisterLoginDtoLanguageEnum.En,
      });

      const res = await superApi.auth.authControllerLogin({
        email: newUserEmail,
        password: newUserPassword,
      });

      newUser = res.user;
    });

    describe('User with "Super Admin" role', () => {
      it('should change password for existing user: /api/v1/users/:id (PATCH)', async () => {
        const res = await superApi.users.usersControllerUpdate(
          newUser.id.toString(),
          {
            email: newUserChangedEmail,
            password: newUserChangedPassword,
          },
        );
        expect(res).toBeDefined();
      });

      describe('Guest', () => {
        it('should login with changed password', async () => {
          const api = new Api();
          const res = await api.auth.authControllerLogin({
            email: newUserChangedEmail,
            password: newUserChangedPassword,
          });

          expect(res.token).toBeDefined();
        });
      });
    });
  });

  describe('Create', () => {
    describe('User with "Admin" role', () => {
      it('should fail to create new user with invalid email', async () => {
        try {
          const res = await superApi.users.usersControllerCreateIndividual({
            email: 'fail-data',
            password: '',
            role: 'user',
            status: 'inactive',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any);
          expect(res).not.toBeDefined();
        } catch (e) {
          const error = getApiError(e);
          expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
        }
      });

      it('should successfully create new individual user', async () => {
        const newUserByAdminEmail = `user-created-by-admin.${Date.now()}@doozyx.com`;
        const newUserByAdminPassword = `secretPassword123$`;

        const res = await superApi.users.usersControllerCreateIndividual({
          email: newUserByAdminEmail,
          password: newUserByAdminPassword,
          role: CreateIndividualUserDtoRoleEnum.User,
          status: CreateIndividualUserDtoStatusEnum.Verified,
          language: CreateIndividualUserDtoLanguageEnum.En,
          individual: {
            firstName: 'First',
            lastName: 'Last',
            phoneNumber: '1234567890',
            document: {
              id: '1234567890',
              type: DocumentDtoTypeEnum.Passport,
              issuingCountryId: 807,
            },
            address: {
              countryId: 807,
              city: 'City',
              street: 'Street',
              state: 'State',
              postalCode: '123456',
            },
          },
        });

        expect(res.status).toBe(UserStatusEnum.Verified);
        expect(res.email).toBe(newUserByAdminEmail);
        expect(res.individual).toBeDefined();
        expect(res.individual?.firstName).toBe('First');

        const api = new Api();
        const loginRes = await api.auth.authControllerLogin({
          email: newUserByAdminEmail,
          password: newUserByAdminPassword,
        });

        expect(loginRes.token).toBeDefined();
      });

      it('should successfully create new user', async () => {
        const newUserByAdminEmail = `user-created-by-admin.${Date.now()}@doozyx.com`;
        const newUserByAdminPassword = `secretPassword123$`;

        try {
          const res = await superApi.users.usersControllerCreate({
            email: newUserByAdminEmail,
            password: newUserByAdminPassword,
            type: CreateUserDtoTypeEnum.Individual,
            status: CreateUserDtoStatusEnum.Verified,
            role: CreateUserDtoRoleEnum.User,
            language: CreateUserDtoLanguageEnum.En,
          });

          expect(res.status).toBe(UserStatusEnum.Verified);
          expect(res.email).toBe(newUserByAdminEmail);
          expect(res.individual).toBeNull();
        } catch (e) {
          const error = getApiError(e);
          console.log(error.message);
        }
      });
    });
  });

  describe('Get many', () => {
    describe('User with "Super Admin" role', () => {
      it('should get list of users: /api/v1/users (GET)', async () => {
        const res = await superApi.users.usersControllerFindAll({});

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const body = res as any;
        expect(body.data[0].email).toBeDefined();
        expect(body.data[0].hash).not.toBeDefined();
        expect(body.data[0].password).not.toBeDefined();
        expect(body.data[0].previousPassword).not.toBeDefined();
      });
    });
  });
});
