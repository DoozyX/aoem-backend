# .PermitsApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permitsControllerPermit**](PermitsApi.md#permitsControllerPermit) | **GET** /api/v1/permits/{id} | 
[**permitsControllerPermitStatus**](PermitsApi.md#permitsControllerPermitStatus) | **GET** /api/v1/permits/permit/{id}/status | 


# **permitsControllerPermit**
> FileType permitsControllerPermit()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermitsApi(configuration);

let body:.PermitsApiPermitsControllerPermitRequest = {
  // number
  id: 3.14,
};

apiInstance.permitsControllerPermit(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**FileType**

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

# **permitsControllerPermitStatus**
> PermitsControllerPermitStatus200Response permitsControllerPermitStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PermitsApi(configuration);

let body:.PermitsApiPermitsControllerPermitStatusRequest = {
  // number
  id: 3.14,
};

apiInstance.permitsControllerPermitStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**PermitsControllerPermitStatus200Response**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


