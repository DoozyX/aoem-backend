# .FilesApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filesLocalControllerUploadFile**](FilesApi.md#filesLocalControllerUploadFile) | **POST** /api/v1/files/upload | 


# **filesLocalControllerUploadFile**
> FileType filesLocalControllerUploadFile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FilesApi(configuration);

let body:.FilesApiFilesLocalControllerUploadFileRequest = {
  // HttpFile (optional)
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.filesLocalControllerUploadFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**FileType**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | File uploaded |  -  |
**422** | Missing file |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


