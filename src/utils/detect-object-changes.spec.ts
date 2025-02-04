import { detectObjectChanges } from './detect-object-changes';

describe('detectObjectChanges function', () => {
  test('should detect basic differences', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    const result = detectObjectChanges(obj1, obj2);
    expect(result).toEqual([{ key: 'b', from: 2, to: 3 }]);
  });

  test('should detect nested differences', () => {
    const obj1 = { a: { b: 1, c: 2 } };
    const obj2 = { a: { b: 1, c: 3 } };
    const result = detectObjectChanges(obj1, obj2);
    expect(result).toEqual([{ key: 'a.c', from: 2, to: 3 }]);
  });

  test('should detect differences with mixed types', () => {
    const obj1 = { a: 1, b: 'string', c: [1, 2, 3] };
    const obj2 = { a: 1, b: 'different', c: [1, 2, 4] };
    const result = detectObjectChanges(obj1, obj2);
    expect(result).toEqual([
      { key: 'b', from: 'string', to: 'different' },
      { key: 'c', from: [1, 2, 3], to: [1, 2, 4] },
    ]);
  });

  test('should return empty array for identical objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const result = detectObjectChanges(obj1, obj2);
    expect(result).toEqual([]);
  });

  test('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = {};
    const result = detectObjectChanges(obj1, obj2);
    expect(result).toEqual([]);
  });

  test('should handle application objects', () => {
    const ojb1 = {
      id: 56,
      createdAt: '2024-07-30T08:15:57.054Z',
      updatedAt: '2024-07-30T08:16:43.372Z',
      deletedAt: null,
      user: {
        id: 41,
        createdAt: '2024-07-03T20:19:27.879Z',
        updatedAt: '2024-07-03T20:19:27.902Z',
        deletedAt: null,
        email: 'user@doozyx.com',
        role: 'user',
        status: 'approved',
        statusReason: null,
        type: 'individual',
        company: null,
        individual: {
          id: 17,
          createdAt: '2024-07-03T20:19:27.894Z',
          updatedAt: '2024-07-03T20:19:27.894Z',
          deletedAt: null,
          firstName: 'John',
          lastName: 'User',
          address: {
            street: 'Street Name',
            city: 'City Name',
            state: 'State Name',
            countryId: 807,
            postalCode: '12345',
          },
          document: {
            id: '3897122222399',
            issuingCountryId: 807,
            type: 'passport',
          },
          phoneNumber: '1234567890',
        },
      },
      userId: 41,
      number: 'A123123',
      issueDate: '2024-07-30T10:15:59.760Z',
      type: 'import',
      importer: 'Earl Runolfsson',
      importCountry: {
        id: 807,
        createdAt: '2024-07-18T21:49:05.320Z',
        updatedAt: '2024-07-18T21:49:05.320Z',
        deletedAt: null,
        name: 'North Macedonia',
        code: 'mk',
      },
      importCountryId: 807,
      exporter: 'Courtney Medhurst-Hahn',
      exportCountry: {
        id: 807,
        createdAt: '2024-07-18T21:49:05.320Z',
        updatedAt: '2024-07-18T21:49:05.320Z',
        deletedAt: null,
        name: 'North Macedonia',
        code: 'mk',
      },
      exportCountryId: 807,
      validity: '2024-07-30T10:15:59.760Z',
      speciesLocation: 'Suite 907',
      specimen: {
        description: {
          description: 'Yacare Caiman',
          tradeTermCode: 'BAL',
          marks: ['Mark 44337', 'Mark 87357'],
          gender: 'other',
        },
        netMass: {
          value: 93917,
          unit: 'kg',
        },
        quantity: 52514,
        citesAppendix: 'I',
        speciesList: 'C',
        source: 'A',
        purpose: 'B',
        specimenOrigin: {
          id: null,
          country: {
            id: 807,
            createdAt: '2024-07-18T21:49:05.320Z',
            updatedAt: '2024-07-18T21:49:05.320Z',
            deletedAt: null,
            name: 'North Macedonia',
            code: 'mk',
          },
          countryId: 807,
          issueDate: null,
        },
        specimenExport: {
          id: null,
          country: {
            id: 4,
            createdAt: '2024-07-18T21:49:04.131Z',
            updatedAt: '2024-07-18T21:49:04.131Z',
            deletedAt: null,
            name: 'Afghanistan',
            code: 'af',
          },
          countryId: 4,
          issueDate: null,
        },
      },
      speciesScientificName: 'Punta de Vacas chinchilla rat',
      issuingManagementAuthority: 'MOEPP',
      commonName: 'Fan-Si-Pan horned pitviper',
      comment: '',
      scientificOpinionFileId: '042f339b-4ab7-4c4c-ba71-ead376edf7fc',
      scientificOpinionFile: {
        id: '042f339b-4ab7-4c4c-ba71-ead376edf7fc',
        name: '[object Object].pdf',
        createdAt: '2024-07-30T08:15:59.773Z',
        updatedAt: '2024-07-30T08:15:59.773Z',
        deletedAt: null,
      },
      proofOfOriginFileId: null,
      exportPermitFileId: null,
      previousPermitsReportFileId: null,
      paymentReceiptFileId: '775d9a9f-b62d-4875-acf0-42845dddd5f0',
      paymentReceiptFile: {
        id: '775d9a9f-b62d-4875-acf0-42845dddd5f0',
        name: '[object Object].pdf',
        createdAt: '2024-07-30T08:15:56.965Z',
        updatedAt: '2024-07-30T08:15:56.965Z',
        deletedAt: null,
      },
      files: [],
      status: 'submitted',
      statusReason: null,
      reviewer: {
        id: 2,
        createdAt: '2024-06-09T15:06:52.080Z',
        updatedAt: '2024-06-09T15:06:52.102Z',
        deletedAt: null,
        email: 'admin@doozyx.com',
        role: 'admin',
        status: 'approved',
        statusReason: null,
        type: 'individual',
        company: null,
        individual: {
          id: 2,
          createdAt: '2024-06-09T15:06:52.096Z',
          updatedAt: '2024-06-09T15:06:52.096Z',
          deletedAt: null,
          firstName: 'Doe',
          lastName: 'Admin',
          address: {
            street: 'Street Name',
            city: 'City Name',
            state: 'State Name',
            countryId: 807,
            postalCode: '12345',
          },
          document: {
            id: '3897122222399',
            issuingCountryId: 807,
            type: 'passport',
          },
          phoneNumber: '1234567890',
        },
      },
      reviewerId: 2,
      approvedById: null,
      signedById: null,
      permitId: null,
      permit: null,
    };

    const obj2 = {
      id: 56,
      createdAt: '2024-07-30T08:15:57.054Z',
      updatedAt: '2024-07-30T09:02:18.842Z',
      deletedAt: null,
      user: {
        id: 41,
        createdAt: '2024-07-03T20:19:27.879Z',
        updatedAt: '2024-07-03T20:19:27.902Z',
        deletedAt: null,
        email: 'user@doozyx.com',
        role: 'user',
        status: 'approved',
        statusReason: null,
        type: 'individual',
        company: null,
        individual: {
          id: 17,
          createdAt: '2024-07-03T20:19:27.894Z',
          updatedAt: '2024-07-03T20:19:27.894Z',
          deletedAt: null,
          firstName: 'John',
          lastName: 'User',
          address: {
            street: 'Street Name',
            city: 'City Name',
            state: 'State Name',
            countryId: 807,
            postalCode: '12345',
          },
          document: {
            id: '3897122222399',
            issuingCountryId: 807,
            type: 'passport',
          },
          phoneNumber: '1234567890',
        },
      },
      userId: 41,
      number: 'A123123',
      issueDate: '2024-07-30T10:15:59.760Z',
      type: 'import',
      importer: 'Earl Runolfsson',
      importCountry: {
        id: 807,
        createdAt: '2024-07-18T21:49:05.320Z',
        updatedAt: '2024-07-18T21:49:05.320Z',
        deletedAt: null,
        name: 'North Macedonia',
        code: 'mk',
      },
      importCountryId: 807,
      exporter: 'Courtney Medhurst-Hahn',
      exportCountry: {
        id: 807,
        createdAt: '2024-07-18T21:49:05.320Z',
        updatedAt: '2024-07-18T21:49:05.320Z',
        deletedAt: null,
        name: 'North Macedonia',
        code: 'mk',
      },
      exportCountryId: 807,
      validity: '2024-07-30T10:15:59.760Z',
      speciesLocation: 'Suite 907',
      specimen: {
        description: {
          description: 'Yacare Caiman',
          tradeTermCode: 'BAL',
          marks: ['Mark 44337', 'Mark 87357'],
          gender: 'other',
        },
        netMass: {
          value: 93917,
          unit: 'kg',
        },
        quantity: 52514,
        citesAppendix: 'I',
        speciesList: 'C',
        source: 'A',
        purpose: 'B',
        specimenOrigin: {
          id: 'asdasd',
          country: {
            id: 807,
            createdAt: '2024-07-18T21:49:05.320Z',
            updatedAt: '2024-07-18T21:49:05.320Z',
            deletedAt: null,
            name: 'North Macedonia',
            code: 'mk',
          },
          countryId: 807,
          issueDate: null,
        },
        specimenExport: {
          id: null,
          country: {
            id: 4,
            createdAt: '2024-07-18T21:49:04.131Z',
            updatedAt: '2024-07-18T21:49:04.131Z',
            deletedAt: null,
            name: 'Afghanistan',
            code: 'af',
          },
          countryId: 4,
          issueDate: null,
        },
      },
      speciesScientificName: 'Punta de Vacas chinchilla rat',
      issuingManagementAuthority: 'MOEPP',
      commonName: 'Fan-Si-Pan horned pitviper',
      comment: '',
      scientificOpinionFileId: '042f339b-4ab7-4c4c-ba71-ead376edf7fc',
      scientificOpinionFile: {
        id: '042f339b-4ab7-4c4c-ba71-ead376edf7fc',
        name: '[object Object].pdf',
        createdAt: '2024-07-30T08:15:59.773Z',
        updatedAt: '2024-07-30T08:15:59.773Z',
        deletedAt: null,
      },
      proofOfOriginFileId: null,
      exportPermitFileId: null,
      previousPermitsReportFileId: null,
      paymentReceiptFileId: '775d9a9f-b62d-4875-acf0-42845dddd5f0',
      paymentReceiptFile: {
        id: '775d9a9f-b62d-4875-acf0-42845dddd5f0',
        name: '[object Object].pdf',
        createdAt: '2024-07-30T08:15:56.965Z',
        updatedAt: '2024-07-30T08:15:56.965Z',
        deletedAt: null,
      },
      files: [],
      status: 'submitted',
      statusReason: null,
      reviewer: {
        id: 2,
        createdAt: '2024-06-09T15:06:52.080Z',
        updatedAt: '2024-06-09T15:06:52.102Z',
        deletedAt: null,
        email: 'admin@doozyx.com',
        role: 'admin',
        status: 'approved',
        statusReason: null,
        type: 'individual',
        company: null,
        individual: {
          id: 2,
          createdAt: '2024-06-09T15:06:52.096Z',
          updatedAt: '2024-06-09T15:06:52.096Z',
          deletedAt: null,
          firstName: 'Doe',
          lastName: 'Admin',
          address: {
            street: 'Street Name',
            city: 'City Name',
            state: 'State Name',
            countryId: 807,
            postalCode: '12345',
          },
          document: {
            id: '3897122222399',
            issuingCountryId: 807,
            type: 'passport',
          },
          phoneNumber: '1234567890',
        },
      },
      reviewerId: 2,
      approvedById: null,
      signedById: null,
      permitId: null,
      permit: null,
    };

    const result = detectObjectChanges(ojb1, obj2);
    expect(result).toEqual([
      {
        key: 'updatedAt',
        from: '2024-07-30T08:16:43.372Z',
        to: '2024-07-30T09:02:18.842Z',
      },
      { key: 'specimen.specimenOrigin.id', from: null, to: 'asdasd' },
    ]);
  });
});
