# .HomeApi

All URIs are relative to *https://aoem-api.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**homeControllerAppInfo**](HomeApi.md#homeControllerAppInfo) | **GET** / | 


# **homeControllerAppInfo**
> void homeControllerAppInfo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .HomeApi(configuration);

let body:any = {};

apiInstance.homeControllerAppInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


