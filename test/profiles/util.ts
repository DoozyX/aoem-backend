import { faker } from '@faker-js/faker';

import {
  CreateCompanyProfileDto,
  CreateIndividualProfileDto,
  DocumentDtoTypeEnum,
} from '@test/api_gen';
import { uploadFakeFile } from '@test/files';
import { Api } from '@test/utils';

export function fakeIndividual(): CreateIndividualProfileDto {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: {
      countryId: 807,
      city: faker.location.city(),
      street: faker.location.state(),
      state: faker.location.state(),
      postalCode: faker.location.zipCode(),
    },
    document: {
      id: faker.string.uuid(),
      type: DocumentDtoTypeEnum.Passport,
      issuingCountryId: 807,
    },
    phoneNumber: '1234567890',
  };
}

export async function fakeCompany(api: Api): Promise<CreateCompanyProfileDto> {
  const document = await uploadFakeFile(api);
  return {
    name: faker.company.name(),
    address: {
      countryId: 807,
      city: faker.location.city(),
      street: faker.location.state(),
      state: faker.location.state(),
      postalCode: faker.location.zipCode(),
    },
    taxNumber: 123,
    identificationDocument: document.id,
    contact: fakeIndividual(),
  };
}
