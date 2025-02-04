# .SpeciesApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**speciesControllerFindAll**](SpeciesApi.md#speciesControllerFindAll) | **GET** /api/v1/species | 


# **speciesControllerFindAll**
> Array<Species> speciesControllerFindAll()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SpeciesApi(configuration);

let body:any = {};

apiInstance.speciesControllerFindAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Species>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of species |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


