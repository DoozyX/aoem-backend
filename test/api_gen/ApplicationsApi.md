# .ApplicationsApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationsControllerAssign**](ApplicationsApi.md#applicationsControllerAssign) | **PATCH** /api/v1/applications/{id}/assign | 
[**applicationsControllerChangeStatus**](ApplicationsApi.md#applicationsControllerChangeStatus) | **PATCH** /api/v1/applications/{id}/change-status | 
[**applicationsControllerFindAll**](ApplicationsApi.md#applicationsControllerFindAll) | **POST** /api/v1/applications/all | 
[**applicationsControllerFindOne**](ApplicationsApi.md#applicationsControllerFindOne) | **GET** /api/v1/applications/{id} | 
[**applicationsControllerMy**](ApplicationsApi.md#applicationsControllerMy) | **POST** /api/v1/applications/my | 
[**applicationsControllerReview**](ApplicationsApi.md#applicationsControllerReview) | **PATCH** /api/v1/applications/{id}/review | 
[**applicationsControllerStatistics**](ApplicationsApi.md#applicationsControllerStatistics) | **POST** /api/v1/applications/statistics | 
[**applicationsControllerSubmit**](ApplicationsApi.md#applicationsControllerSubmit) | **POST** /api/v1/applications/submit | 
[**applicationsControllerUpdate**](ApplicationsApi.md#applicationsControllerUpdate) | **PATCH** /api/v1/applications/{id} | 


# **applicationsControllerAssign**
> Application applicationsControllerAssign(assignApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerAssignRequest = {
  // number
  id: 3.14,
  // AssignApplicationDto
  assignApplicationDto: {
    reviewerId: 3.14,
  },
};

apiInstance.applicationsControllerAssign(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignApplicationDto** | **AssignApplicationDto**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Application**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Application assigned successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerChangeStatus**
> Application applicationsControllerChangeStatus(changeStatusApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerChangeStatusRequest = {
  // number
  id: 3.14,
  // ChangeStatusApplicationDto
  changeStatusApplicationDto: {
    status: "created",
    statusReason: "statusReason_example",
  },
};

apiInstance.applicationsControllerChangeStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeStatusApplicationDto** | **ChangeStatusApplicationDto**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Application**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Application updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerFindAll**
> ApplicationsControllerMy200Response applicationsControllerFindAll(queryApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerFindAllRequest = {
  // QueryApplicationDto
  queryApplicationDto: {
    page: 1,
    limit: 10,
    filters: {
      id: 3.14,
      importer: "importer_example",
      exporter: "exporter_example",
      speciesScientificName: "speciesScientificName_example",
      commonName: "commonName_example",
      userId: 3.14,
      userEmail: "userEmail_example",
      reviewerId: 3.14,
      reviewerEmail: "reviewerEmail_example",
      types: [
        "import",
      ],
      statuses: [
        "created",
      ],
      year: 3.14,
    },
    sort: [
      {
        orderBy: "userId",
        order: "ASC",
      },
    ],
  },
};

apiInstance.applicationsControllerFindAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryApplicationDto** | **QueryApplicationDto**|  |


### Return type

**ApplicationsControllerMy200Response**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerFindOne**
> Application applicationsControllerFindOne()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerFindOneRequest = {
  // number
  id: 3.14,
};

apiInstance.applicationsControllerFindOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Application**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerMy**
> ApplicationsControllerMy200Response applicationsControllerMy(queryApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerMyRequest = {
  // QueryApplicationDto
  queryApplicationDto: {
    page: 1,
    limit: 10,
    filters: {
      id: 3.14,
      importer: "importer_example",
      exporter: "exporter_example",
      speciesScientificName: "speciesScientificName_example",
      commonName: "commonName_example",
      userId: 3.14,
      userEmail: "userEmail_example",
      reviewerId: 3.14,
      reviewerEmail: "reviewerEmail_example",
      types: [
        "import",
      ],
      statuses: [
        "created",
      ],
      year: 3.14,
    },
    sort: [
      {
        orderBy: "userId",
        order: "ASC",
      },
    ],
  },
};

apiInstance.applicationsControllerMy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryApplicationDto** | **QueryApplicationDto**|  |


### Return type

**ApplicationsControllerMy200Response**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerReview**
> Application applicationsControllerReview(reviewApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerReviewRequest = {
  // number
  id: 3.14,
  // ReviewApplicationDto
  reviewApplicationDto: {
    type: "import",
    importer: "importer_example",
    importCountryId: 807,
    exporter: "exporter_example",
    exportCountryId: 807,
    specimen: {
      description: null,
      netMass: null,
      quantity: 3.14,
      citesAppendix: "I",
      speciesList: "A",
      source: "W",
      purpose: "B",
      specimenOrigin: {
        countryId: 3.14,
        id: "id_example",
        issueDate: new Date('1970-01-01T00:00:00.00Z'),
      },
      specimenExport: {
        countryId: 3.14,
        id: "id_example",
        issueDate: new Date('1970-01-01T00:00:00.00Z'),
      },
    },
    speciesScientificName: "speciesScientificName_example",
    commonName: "commonName_example",
    comment: "comment_example",
    fileIds: [
      "fileIds_example",
    ],
    proofOfOriginFileId: "proofOfOriginFileId_example",
    exportPermitFileId: "exportPermitFileId_example",
    previousPermitsReportFileId: "previousPermitsReportFileId_example",
    paymentReceiptFileId: "paymentReceiptFileId_example",
    status: "created",
    number: "number_example",
    issueDate: new Date('1970-01-01T00:00:00.00Z'),
    validity: new Date('1970-01-01T00:00:00.00Z'),
    speciesLocation: "speciesLocation_example",
    issuingManagementAuthority: "issuingManagementAuthority_example",
    scientificOpinionFileId: "scientificOpinionFileId_example",
  },
};

apiInstance.applicationsControllerReview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewApplicationDto** | **ReviewApplicationDto**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Application**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Application updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerStatistics**
> ApplicationStatistics applicationsControllerStatistics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:any = {};

apiInstance.applicationsControllerStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ApplicationStatistics**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerSubmit**
> Application applicationsControllerSubmit(createApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerSubmitRequest = {
  // CreateApplicationDto
  createApplicationDto: {
    type: "import",
    importer: "importer_example",
    importCountryId: 807,
    exporter: "exporter_example",
    exportCountryId: 807,
    specimen: {
      description: null,
      netMass: null,
      quantity: 3.14,
      citesAppendix: "I",
      speciesList: "A",
      source: "W",
      purpose: "B",
      specimenOrigin: {
        countryId: 3.14,
      },
    },
    speciesScientificName: "speciesScientificName_example",
    commonName: "commonName_example",
    comment: "comment_example",
    fileIds: [
      "fileIds_example",
    ],
    proofOfOriginFileId: "proofOfOriginFileId_example",
    exportPermitFileId: "exportPermitFileId_example",
    previousPermitsReportFileId: "previousPermitsReportFileId_example",
    paymentReceiptFileId: "paymentReceiptFileId_example",
    status: "created",
  },
};

apiInstance.applicationsControllerSubmit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createApplicationDto** | **CreateApplicationDto**|  |


### Return type

**Application**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Application submitted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **applicationsControllerUpdate**
> Application applicationsControllerUpdate(updateApplicationDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApplicationsApi(configuration);

let body:.ApplicationsApiApplicationsControllerUpdateRequest = {
  // number
  id: 3.14,
  // UpdateApplicationDto
  updateApplicationDto: {
    type: "import",
    importer: "importer_example",
    importCountryId: 807,
    exporter: "exporter_example",
    exportCountryId: 807,
    specimen: {
      description: null,
      netMass: null,
      quantity: 3.14,
      citesAppendix: "I",
      speciesList: "A",
      source: "W",
      purpose: "B",
      specimenOrigin: {
        countryId: 3.14,
      },
    },
    speciesScientificName: "speciesScientificName_example",
    commonName: "commonName_example",
    comment: "comment_example",
    fileIds: [
      "fileIds_example",
    ],
    proofOfOriginFileId: "proofOfOriginFileId_example",
    exportPermitFileId: "exportPermitFileId_example",
    previousPermitsReportFileId: "previousPermitsReportFileId_example",
    paymentReceiptFileId: "paymentReceiptFileId_example",
    status: "created",
  },
};

apiInstance.applicationsControllerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateApplicationDto** | **UpdateApplicationDto**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Application**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Application updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


