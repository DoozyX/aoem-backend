# .ActivityApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activityControllerFindAll**](ActivityApi.md#activityControllerFindAll) | **GET** /api/v1/activity/{type}/{id} | 


# **activityControllerFindAll**
> Array<Activity> activityControllerFindAll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActivityApi(configuration);

let body:.ActivityApiActivityControllerFindAllRequest = {
  // string
  type: "type_example",
  // number
  id: 3.14,
};

apiInstance.activityControllerFindAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**string**] |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<Activity>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of activities |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


