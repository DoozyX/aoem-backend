import { faker } from '@faker-js/faker';

import {
  ApplicationStatusEnum,
  CreateApplicationDtoStatusEnum,
  CreateApplicationDtoTypeEnum,
  FilterApplicationDtoStatusesEnum,
  FilterApplicationDtoTypesEnum,
  SpecimenApplicantDtoCitesAppendixEnum,
  SpecimenApplicantDtoNetMassUnitEnum,
  SpecimenApplicantDtoPurposeEnum,
  SpecimenApplicantDtoSourceEnum,
  SpecimenApplicantDtoSpeciesListEnum,
  SpecimenDescriptionDtoGenderEnum,
  SpecimenDescriptionDtoTradeTermCodeEnum,
} from '@test/api_gen';
import { uploadFakeFile } from '@test/files';
import { ADMIN_AUTH, Api, TESTER_AUTH } from '@test/utils';

describe('Applications Filtering', () => {
  let api: Api;
  const applicationIds: number[] = [];

  beforeAll(async () => {
    api = await Api.withLogin(ADMIN_AUTH);

    const userApi = await Api.withLogin(TESTER_AUTH);

    // Create multiple applications with different attributes
    for (let i = 0; i < 5; i++) {
      const file = await uploadFakeFile(userApi);
      const res = await userApi.applications.applicationsControllerSubmit({
        type:
          i % 2 === 0
            ? CreateApplicationDtoTypeEnum.Import
            : CreateApplicationDtoTypeEnum.Export,
        importer: `Importer ${i}`,
        importCountryId: 807,
        exporter: `Exporter ${i}`,
        exportCountryId: 807,
        specimen: {
          description: {
            description: faker.animal.crocodilia(),
            tradeTermCode: SpecimenDescriptionDtoTradeTermCodeEnum.Bal,
            gender: SpecimenDescriptionDtoGenderEnum.Other,
            marks: [
              `Mark ${faker.number.int({ max: 100000 })}`,
              `Mark ${faker.number.int({ max: 100000 })}`,
            ],
          },
          netMass: {
            value: faker.number.int({ max: 100000 }),
            unit: SpecimenApplicantDtoNetMassUnitEnum.Kg,
          },
          quantity: faker.number.int({ max: 100000 }),
          citesAppendix: SpecimenApplicantDtoCitesAppendixEnum.I,
          speciesList: SpecimenApplicantDtoSpeciesListEnum.C,
          source: SpecimenApplicantDtoSourceEnum.A,
          purpose: SpecimenApplicantDtoPurposeEnum.B,
          specimenOrigin: { countryId: 807 },
        },
        speciesScientificName: `ScientificName ${i}`,
        commonName: `CommonName ${i}`,
        proofOfOriginFileId: null,
        exportPermitFileId: null,
        previousPermitsReportFileId: null,
        paymentReceiptFileId: file.id,
        fileIds: [],
        comment: '',
        status:
          i % 2 === 0
            ? CreateApplicationDtoStatusEnum.Created
            : CreateApplicationDtoStatusEnum.Submitted,
      });
      applicationIds.push(res.id);
    }
  });

  it('should filter applications by importer', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: { importer: 'Importer 1' },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.importer).toBe('Importer 1');
    });
  });

  it('should filter applications by exporter case insensitive', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: { exporter: 'exporter' },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.exporter).toMatch(/.*exporter.*/i);
    });
  });

  it('should filter applications by status', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: { statuses: [FilterApplicationDtoStatusesEnum.Created] },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.status).toBe(CreateApplicationDtoStatusEnum.Created);
    });
  });

  it('should filter applications by type', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: { types: [FilterApplicationDtoTypesEnum.Import] },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.type).toBe(CreateApplicationDtoTypeEnum.Import);
    });
  });

  it('should filter applications by year', async () => {
    const currentYear = new Date().getFullYear();
    const res = await api.applications.applicationsControllerFindAll({
      filters: { year: currentYear },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(new Date(app.createdAt).getFullYear()).toBe(currentYear);
    });
  });

  it('should filter applications by speciesScientificName', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: { speciesScientificName: 'ScientificName 1' },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.speciesScientificName).toBe('ScientificName 1');
    });
  });

  it('should filter applications by commonName', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: { commonName: 'CommonName 2' },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.commonName).toBe('CommonName 2');
    });
  });

  it('should filter applications by speciesScientificName, commonName, importer, exporter, and status', async () => {
    const res = await api.applications.applicationsControllerFindAll({
      filters: {
        speciesScientificName: 'ScientificName 3',
        commonName: 'CommonName 3',
        importer: 'Importer 3',
        exporter: 'Exporter 3',
        statuses: [FilterApplicationDtoStatusesEnum.Submitted],
      },
    });
    expect(res).toBeDefined();
    expect(res.data.length).toBeGreaterThan(0);
    res.data.forEach((app) => {
      expect(app.speciesScientificName).toBe('ScientificName 3');
      expect(app.commonName).toBe('CommonName 3');
      expect(app.importer).toBe('Importer 3');
      expect(app.exporter).toBe('Exporter 3');
      expect(app.status).toBe(ApplicationStatusEnum.Submitted);
    });
  });
});
