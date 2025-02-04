# .ProfilesApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profilesControllerCreateCompany**](ProfilesApi.md#profilesControllerCreateCompany) | **POST** /api/v1/profiles/company | 
[**profilesControllerCreateIndividual**](ProfilesApi.md#profilesControllerCreateIndividual) | **POST** /api/v1/profiles/individual | 
[**profilesControllerUpdateCompany**](ProfilesApi.md#profilesControllerUpdateCompany) | **PATCH** /api/v1/profiles/company | 
[**profilesControllerUpdateIndividual**](ProfilesApi.md#profilesControllerUpdateIndividual) | **PATCH** /api/v1/profiles/individual | 


# **profilesControllerCreateCompany**
> Company profilesControllerCreateCompany(createCompanyProfileDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesControllerCreateCompanyRequest = {
  // CreateCompanyProfileDto
  createCompanyProfileDto: {
    name: "name_example",
    address: {
      street: "street_example",
      city: "city_example",
      state: "state_example",
      countryId: 3.14,
      postalCode: "postalCode_example",
    },
    taxNumber: 3.14,
    identificationDocument: "identificationDocument_example",
    contact: {
      firstName: "firstName_example",
      lastName: "lastName_example",
      address: {
        street: "street_example",
        city: "city_example",
        state: "state_example",
        countryId: 3.14,
        postalCode: "postalCode_example",
      },
      document: {
        id: "id_example",
        type: "personalId",
        issuingCountryId: 807,
      },
      phoneNumber: "phoneNumber_example",
    },
  },
};

apiInstance.profilesControllerCreateCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCompanyProfileDto** | **CreateCompanyProfileDto**|  |


### Return type

**Company**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Company profile created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesControllerCreateIndividual**
> Individual profilesControllerCreateIndividual(createIndividualProfileDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesControllerCreateIndividualRequest = {
  // CreateIndividualProfileDto
  createIndividualProfileDto: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    address: {
      street: "street_example",
      city: "city_example",
      state: "state_example",
      countryId: 3.14,
      postalCode: "postalCode_example",
    },
    document: {
      id: "id_example",
      type: "personalId",
      issuingCountryId: 807,
    },
    phoneNumber: "phoneNumber_example",
  },
};

apiInstance.profilesControllerCreateIndividual(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIndividualProfileDto** | **CreateIndividualProfileDto**|  |


### Return type

**Individual**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Individual profile created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesControllerUpdateCompany**
> Company profilesControllerUpdateCompany(updateCompanyProfileDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesControllerUpdateCompanyRequest = {
  // UpdateCompanyProfileDto
  updateCompanyProfileDto: {
    name: "name_example",
    address: {
      street: "street_example",
      city: "city_example",
      state: "state_example",
      countryId: 3.14,
      postalCode: "postalCode_example",
    },
    taxNumber: 3.14,
    identificationDocument: "identificationDocument_example",
    contact: {
      firstName: "firstName_example",
      lastName: "lastName_example",
      address: {
        street: "street_example",
        city: "city_example",
        state: "state_example",
        countryId: 3.14,
        postalCode: "postalCode_example",
      },
      document: {
        id: "id_example",
        type: "personalId",
        issuingCountryId: 807,
      },
      phoneNumber: "phoneNumber_example",
    },
  },
};

apiInstance.profilesControllerUpdateCompany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCompanyProfileDto** | **UpdateCompanyProfileDto**|  |


### Return type

**Company**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Company profile updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **profilesControllerUpdateIndividual**
> Individual profilesControllerUpdateIndividual(updateIndividualProfileDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProfilesApi(configuration);

let body:.ProfilesApiProfilesControllerUpdateIndividualRequest = {
  // UpdateIndividualProfileDto
  updateIndividualProfileDto: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    address: {
      street: "street_example",
      city: "city_example",
      state: "state_example",
      countryId: 3.14,
      postalCode: "postalCode_example",
    },
    document: {
      id: "id_example",
      type: "personalId",
      issuingCountryId: 807,
    },
    phoneNumber: "phoneNumber_example",
  },
};

apiInstance.profilesControllerUpdateIndividual(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIndividualProfileDto** | **UpdateIndividualProfileDto**|  |


### Return type

**Individual**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Individual profile updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


