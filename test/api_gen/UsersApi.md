# .UsersApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersControllerActivate**](UsersApi.md#usersControllerActivate) | **PATCH** /api/v1/users/{id}/activate | 
[**usersControllerCreate**](UsersApi.md#usersControllerCreate) | **POST** /api/v1/users | 
[**usersControllerCreateIndividual**](UsersApi.md#usersControllerCreateIndividual) | **POST** /api/v1/users/individual | 
[**usersControllerFindAll**](UsersApi.md#usersControllerFindAll) | **POST** /api/v1/users/all | 
[**usersControllerFindOne**](UsersApi.md#usersControllerFindOne) | **GET** /api/v1/users/{id} | 
[**usersControllerStatistics**](UsersApi.md#usersControllerStatistics) | **GET** /api/v1/users/statistics | 
[**usersControllerUpdate**](UsersApi.md#usersControllerUpdate) | **PATCH** /api/v1/users/{id} | 


# **usersControllerActivate**
> User usersControllerActivate(activateUserDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersControllerActivateRequest = {
  // string
  id: "id_example",
  // ActivateUserDto
  activateUserDto: {
    status: "inactive",
    statusReason: "statusReason_example",
  },
};

apiInstance.usersControllerActivate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activateUserDto** | **ActivateUserDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The record has been successfully updated. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerCreate**
> User usersControllerCreate(createUserDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersControllerCreateRequest = {
  // CreateUserDto
  createUserDto: {
    email: "email_example",
    password: "password_example",
    role: "user",
    status: "inactive",
    language: "en",
  },
};

apiInstance.usersControllerCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserDto** | **CreateUserDto**|  |


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The record has been successfully created. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerCreateIndividual**
> User usersControllerCreateIndividual(createIndividualUserDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersControllerCreateIndividualRequest = {
  // CreateIndividualUserDto
  createIndividualUserDto: {
    email: "email_example",
    password: "password_example",
    role: "user",
    status: "inactive",
    language: "en",
  },
};

apiInstance.usersControllerCreateIndividual(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIndividualUserDto** | **CreateIndividualUserDto**|  |


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The record has been successfully created. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerFindAll**
> UsersControllerFindAll200Response usersControllerFindAll(queryUserDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersControllerFindAllRequest = {
  // QueryUserDto
  queryUserDto: {
    page: 1,
    limit: 10,
    filter: {
      roles: [
        "user",
      ],
      statuses: [
        "inactive",
      ],
      email: "email_example",
    },
    sort: [
      {
        orderBy: "email",
        order: "ASC",
      },
    ],
  },
};

apiInstance.usersControllerFindAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryUserDto** | **QueryUserDto**|  |


### Return type

**UsersControllerFindAll200Response**

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

# **usersControllerFindOne**
> User usersControllerFindOne()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersControllerFindOneRequest = {
  // string
  id: "id_example",
};

apiInstance.usersControllerFindOne(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the user if exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersControllerStatistics**
> UserStatistics usersControllerStatistics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:any = {};

apiInstance.usersControllerStatistics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserStatistics**

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

# **usersControllerUpdate**
> User usersControllerUpdate(updateUserDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersControllerUpdateRequest = {
  // string
  id: "id_example",
  // UpdateUserDto
  updateUserDto: {
    email: "test1@doozyx.com",
    password: "password_example",
    role: "user",
    status: "inactive",
    language: "en",
    statusReason: "statusReason_example",
  },
};

apiInstance.usersControllerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserDto** | **UpdateUserDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**User**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The record has been successfully updated. |  -  |
**422** | Invalid data provided |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


