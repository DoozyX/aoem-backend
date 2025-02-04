import { faker } from '@faker-js/faker';

import {
  ApplicationStatusEnum,
  ChangeStatusApplicationDtoStatusEnum,
  CreateApplicationDto,
  CreateApplicationDtoStatusEnum,
  CreateApplicationDtoTypeEnum,
  FilterUserDtoRolesEnum,
  PermitsControllerPermitStatus200ResponseStateEnum,
  ReviewApplicationDtoStatusEnum,
  ReviewApplicationDtoTypeEnum,
  SortApplicationDtoOrderByEnum,
  SortApplicationDtoOrderEnum,
  SpecimenAdminDtoCitesAppendixEnum,
  SpecimenAdminDtoPurposeEnum,
  SpecimenAdminDtoSourceEnum,
  SpecimenAdminDtoSpeciesListEnum,
  SpecimenApplicantDtoCitesAppendixEnum,
  SpecimenApplicantDtoNetMassUnitEnum,
  SpecimenApplicantDtoPurposeEnum,
  SpecimenApplicantDtoSourceEnum,
  SpecimenApplicantDtoSpeciesListEnum,
  SpecimenDescriptionDtoGenderEnum,
  SpecimenDescriptionDtoTradeTermCodeEnum,
  UpdateApplicationDtoStatusEnum,
} from '@test/api_gen';
import { uploadFakeFile } from '@test/files';
import {
  ADMIN_AUTH,
  Api,
  APPROVER_AUTH,
  ARCHIVER_AUTH,
  DIRECTOR_AUTH,
  sleep,
  TESTER_AUTH,
} from '@test/utils';

describe('Applications', () => {
  describe('List my', () => {
    it('should list user apps', async () => {
      const api = await Api.withLogin(TESTER_AUTH);
      const res = await api.applications.applicationsControllerMy({});
      expect(res).toBeDefined();
    });
  });

  describe('Application Flow', () => {
    let applicationId: number;
    it('should create new app', async () => {
      const api = await Api.withLogin(TESTER_AUTH);
      const file = await uploadFakeFile(api);
      const newApplication: CreateApplicationDto = {
        type: CreateApplicationDtoTypeEnum.Import,
        importer: faker.person.fullName(),
        importCountryId: 807,
        exporter: faker.person.fullName(),
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
        speciesScientificName: faker.animal.rodent(),
        commonName: faker.animal.snake(),
        proofOfOriginFileId: null,
        exportPermitFileId: null,
        previousPermitsReportFileId: null,
        paymentReceiptFileId: file.id,
        fileIds: [],
        comment: '',
        status: CreateApplicationDtoStatusEnum.Created,
      };
      const res =
        await api.applications.applicationsControllerSubmit(newApplication);
      expect(res.id).toBeDefined();
      applicationId = res.id;

      const createdApp =
        await api.applications.applicationsControllerFindOne(applicationId);
      expect(createdApp).toBeDefined();
      expect(createdApp.id).toBe(applicationId);

      const myApps = await api.applications.applicationsControllerMy({
        sort: [
          {
            orderBy: SortApplicationDtoOrderByEnum.CreatedAt,
            order: SortApplicationDtoOrderEnum.Desc,
          },
        ],
      });
      expect(myApps.data).toBeDefined();
      expect(myApps.data.length).toBeGreaterThan(0);
      expect(myApps.data.find((a) => a.id == applicationId)).toBeDefined();

      const submittedApp = await api.applications.applicationsControllerUpdate(
        applicationId,
        {
          status: UpdateApplicationDtoStatusEnum.Submitted,
        },
      );
      expect(submittedApp).toBeDefined();
      expect(submittedApp.status).toBe(ApplicationStatusEnum.Submitted);
    });

    it('should assign app using archiver', async () => {
      const api = await Api.withLogin(ARCHIVER_AUTH);
      const admins = await api.users.usersControllerFindAll({
        filter: { roles: [FilterUserDtoRolesEnum.Admin] },
      });
      const adminId = admins.data.find((u) => u.email == ADMIN_AUTH.email)!.id;
      const res = await api.applications.applicationsControllerAssign(
        applicationId,
        {
          reviewerId: adminId,
        },
      );
      expect(res).toBeDefined();
      expect(res.reviewerId).toBe(adminId);
    });

    it('should review app using admin', async () => {
      const api = await Api.withLogin(ADMIN_AUTH);
      const application =
        await api.applications.applicationsControllerFindOne(applicationId);
      const file = await uploadFakeFile(api);
      const res = await api.applications.applicationsControllerReview(
        applicationId,
        {
          ...application,
          type: application.type as unknown as ReviewApplicationDtoTypeEnum,
          paymentReceiptFileId: application.paymentReceiptFileId!,
          number: 'A123123',
          issueDate: new Date(),
          validity: new Date(),
          speciesLocation: faker.location.secondaryAddress(),
          issuingManagementAuthority: 'MOEPP',
          scientificOpinionFileId: file.id,
          status:
            application.status as unknown as ReviewApplicationDtoStatusEnum,
          specimen: {
            ...application.specimen,
            netMass: application.specimen.netMass
              ? {
                  ...application.specimen.netMass,
                  unit: application.specimen.netMass
                    .unit as unknown as SpecimenApplicantDtoNetMassUnitEnum,
                }
              : null,
            citesAppendix: application.specimen
              .citesAppendix as unknown as SpecimenAdminDtoCitesAppendixEnum,
            speciesList: application.specimen
              .speciesList as unknown as SpecimenAdminDtoSpeciesListEnum,
            source: application.specimen
              .source as unknown as SpecimenAdminDtoSourceEnum,
            purpose: application.specimen
              .purpose as unknown as SpecimenAdminDtoPurposeEnum,
            description: {
              ...application.specimen.description,
              gender: application.specimen.description
                .gender as unknown as SpecimenDescriptionDtoGenderEnum,
              tradeTermCode: application.specimen.description
                .tradeTermCode as unknown as SpecimenDescriptionDtoTradeTermCodeEnum,
            },
          },
        },
      );
      expect(res).toBeDefined();
    });

    it('should approve app using admin', async () => {
      const api = await Api.withLogin(ADMIN_AUTH);
      const res = await api.applications.applicationsControllerChangeStatus(
        applicationId,
        {
          status: ChangeStatusApplicationDtoStatusEnum.Reviewed,
          statusReason: null,
        },
      );
      expect(res).toBeDefined();
      expect(res.status).toBe(ChangeStatusApplicationDtoStatusEnum.Reviewed);
    });

    it('should approve app using approver', async () => {
      const api = await Api.withLogin(APPROVER_AUTH);
      const res = await api.applications.applicationsControllerChangeStatus(
        applicationId,
        {
          status: ChangeStatusApplicationDtoStatusEnum.Approved,
          statusReason: null,
        },
      );
      expect(res).toBeDefined();
      expect(res.status).toBe(ChangeStatusApplicationDtoStatusEnum.Approved);
    });

    it('should sign app using director', async () => {
      const api = await Api.withLogin(DIRECTOR_AUTH);
      const res = await api.applications.applicationsControllerChangeStatus(
        applicationId,
        {
          status: ChangeStatusApplicationDtoStatusEnum.Signed,
          statusReason: null,
        },
      );
      expect(res).toBeDefined();
      expect(res.status).toBe(CreateApplicationDtoStatusEnum.Signed);
    });

    it('should download permit after signing', async () => {
      const api = await Api.withLogin(ADMIN_AUTH);
      let jobStatus: PermitsControllerPermitStatus200ResponseStateEnum;
      const maxAttempts = 20;
      let attempts = 0;
      do {
        if (attempts >= maxAttempts) {
          throw new Error('Job processing timeout');
        }
        await sleep(3000);
        const res =
          await api.permits.permitsControllerPermitStatus(applicationId);
        jobStatus = res.state;
        attempts++;
      } while (jobStatus !== 'completed' && jobStatus !== 'failed');
      const res = await api.permits.permitsControllerPermit(applicationId);
      expect(res.id).toBeDefined();
    }, 60000);

    it('should contain activity for the process', async () => {
      const api = await Api.withLogin(ADMIN_AUTH);
      const res = await api.activity.activityControllerFindAll(
        'application',
        applicationId,
      );
      expect(res).toBeDefined();
      expect(res.length).toBeGreaterThan(0);
    });
  });
});
