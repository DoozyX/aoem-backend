# .AuthApi

All URIs are relative to *https://moepp-cites.doozyx.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerConfirmEmail**](AuthApi.md#authControllerConfirmEmail) | **POST** /api/v1/auth/email/confirm | 
[**authControllerForgotPassword**](AuthApi.md#authControllerForgotPassword) | **POST** /api/v1/auth/forgot/password | 
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /api/v1/auth/email/login | 
[**authControllerLogout**](AuthApi.md#authControllerLogout) | **POST** /api/v1/auth/logout | 
[**authControllerMe**](AuthApi.md#authControllerMe) | **GET** /api/v1/auth/me | 
[**authControllerRefresh**](AuthApi.md#authControllerRefresh) | **POST** /api/v1/auth/refresh | 
[**authControllerRegister**](AuthApi.md#authControllerRegister) | **POST** /api/v1/auth/email/register | 
[**authControllerResendVerifyMail**](AuthApi.md#authControllerResendVerifyMail) | **POST** /api/v1/auth/email/resend-verify-mail | 
[**authControllerResetPassword**](AuthApi.md#authControllerResetPassword) | **POST** /api/v1/auth/reset/password | 
[**authControllerUpdate**](AuthApi.md#authControllerUpdate) | **PATCH** /api/v1/auth/me | 


# **authControllerConfirmEmail**
> void authControllerConfirmEmail(authConfirmEmailDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerConfirmEmailRequest = {
  // AuthConfirmEmailDto
  authConfirmEmailDto: {
    hash: "hash_example",
  },
};

apiInstance.authControllerConfirmEmail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authConfirmEmailDto** | **AuthConfirmEmailDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User confirmed successfully |  -  |
**401** | Invalid token |  -  |
**404** | Invalid user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerForgotPassword**
> void authControllerForgotPassword(authForgotPasswordDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerForgotPasswordRequest = {
  // AuthForgotPasswordDto
  authForgotPasswordDto: {
    email: "email_example",
  },
};

apiInstance.authControllerForgotPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authForgotPasswordDto** | **AuthForgotPasswordDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Forgot request sent successfully |  -  |
**404** | Invalid user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerLogin**
> LoginResponseType authControllerLogin(authEmailLoginDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerLoginRequest = {
  // AuthEmailLoginDto
  authEmailLoginDto: {
    email: "user@doozyx.com",
    password: "password_example",
  },
};

apiInstance.authControllerLogin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authEmailLoginDto** | **AuthEmailLoginDto**|  |


### Return type

**LoginResponseType**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Login successful |  -  |
**401** | Invalid password |  -  |
**404** | Invalid email |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerLogout**
> void authControllerLogout()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerLogout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Logout successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerMe**
> User authControllerMe()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerMe(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


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
**200** | Current user information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerRefresh**
> RefreshResponseType authControllerRefresh()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerRefresh(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RefreshResponseType**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token refreshed successfully |  -  |
**401** | Invalid token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerRegister**
> void authControllerRegister(authRegisterLoginDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerRegisterRequest = {
  // AuthRegisterLoginDto
  authRegisterLoginDto: {
    email: "user@doozyx.com",
    password: "password_example",
    type: "individual",
    language: "en",
  },
};

apiInstance.authControllerRegister(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authRegisterLoginDto** | **AuthRegisterLoginDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User registered successfully |  -  |
**422** | Email already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerResendVerifyMail**
> void authControllerResendVerifyMail()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerResendVerifyMail(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Email sent successfully |  -  |
**422** | Invalid State |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerResetPassword**
> void authControllerResetPassword(authResetPasswordDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerResetPasswordRequest = {
  // AuthResetPasswordDto
  authResetPasswordDto: {
    password: "password_example",
    hash: "hash_example",
  },
};

apiInstance.authControllerResetPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authResetPasswordDto** | **AuthResetPasswordDto**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Password reset successfully |  -  |
**401** | Invalid token |  -  |
**404** | Invalid user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUpdate**
> User authControllerUpdate(authUpdateDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUpdateRequest = {
  // AuthUpdateDto
  authUpdateDto: {
    password: "password_example",
    oldPassword: "oldPassword_example",
  },
};

apiInstance.authControllerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUpdateDto** | **AuthUpdateDto**|  |


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
**200** | User information updated successfully |  -  |
**422** | Email already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


