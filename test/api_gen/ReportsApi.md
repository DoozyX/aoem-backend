# .ReportsApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportsControllerReport**](ReportsApi.md#reportsControllerReport) | **GET** /api/v1/reports/{year}/{num} | 


# **reportsControllerReport**
> FileType reportsControllerReport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiReportsControllerReportRequest = {
  // number
  year: 3.14,
  // string
  num: "num_example",
};

apiInstance.reportsControllerReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | [**number**] |  | defaults to undefined
 **num** | [**string**] |  | defaults to undefined


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


