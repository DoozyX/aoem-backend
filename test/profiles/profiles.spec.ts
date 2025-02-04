import { HttpStatus } from '@nestjs/common';

import {
  CreateUserDtoLanguageEnum,
  CreateUserDtoRoleEnum,
  CreateUserDtoStatusEnum,
  CreateUserDtoTypeEnum,
} from '@test/api_gen';
import {
  Api,
  AuthCredentials,
  getApiError,
  SUPER_ADMIN_AUTH,
} from '@test/utils';

import { fakeCompany, fakeIndividual } from './util';

describe('Profiles', () => {
  describe('Individual', () => {
    const userCredentials = new AuthCredentials(
      `new.user.${Date.now()}@doozyx.com`,
      'Secret-pwd-123$',
    );
    beforeAll(async () => {
      const superApi = await Api.withLogin(SUPER_ADMIN_AUTH);
      await superApi.users.usersControllerCreate({
        email: userCredentials.email,
        password: userCredentials.password,
        type: CreateUserDtoTypeEnum.Individual,
        status: CreateUserDtoStatusEnum.Verified,
        role: CreateUserDtoRoleEnum.User,
        language: CreateUserDtoLanguageEnum.En,
      });
    });

    it('should fail using company data', async () => {
      const api = await Api.withLogin(userCredentials);
      try {
        const company = await fakeCompany(api);
        const res = await api.profiles.profilesControllerCreateCompany(company);
        expect(res).not.toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(e).toBeDefined();
        expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      }
    });

    it('should complete individual profile', async () => {
      const api = await Api.withLogin(userCredentials);
      const individual = fakeIndividual();
      const res =
        await api.profiles.profilesControllerCreateIndividual(individual);

      expect(res).toBeDefined();
      expect(res.id).toBeDefined();
      expect(res.firstName).toBe(individual.firstName);

      const user = await api.auth.authControllerMe();
      expect(user.individual?.id).toBe(res.id);
    });
  });

  describe('Company', () => {
    const userCredentials = new AuthCredentials(
      `new.company.${Date.now()}@doozyx.com`,
      'SecretPwd-123$',
    );

    beforeAll(async () => {
      const superApi = await Api.withLogin(SUPER_ADMIN_AUTH);
      const res = await superApi.users.usersControllerCreate({
        email: userCredentials.email,
        password: userCredentials.password,
        type: CreateUserDtoTypeEnum.Company,
        status: CreateUserDtoStatusEnum.Verified,
        role: CreateUserDtoRoleEnum.User,
        language: CreateUserDtoLanguageEnum.En,
      });
      expect(res).toBeDefined();
      expect(res.email).toBe(userCredentials.email);
    });

    it('should fail using individual data', async () => {
      const api = await Api.withLogin(userCredentials);
      try {
        const individual = fakeIndividual();
        const res =
          await api.profiles.profilesControllerCreateIndividual(individual);
        expect(res).not.toBeDefined();
      } catch (e) {
        const error = getApiError(e);
        expect(e).toBeDefined();
        expect(error.code).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
      }
    });

    it('should complete company profile', async () => {
      const api = await Api.withLogin(userCredentials);
      const company = await fakeCompany(api);
      const res = await api.profiles.profilesControllerCreateCompany(company);

      expect(res).toBeDefined();
      expect(res.id).toBeDefined();
      expect(res.name).toBe(company.name);

      const user = await api.auth.authControllerMe();
      expect(user.company?.id).toBe(res.id);
    });
  });
});
