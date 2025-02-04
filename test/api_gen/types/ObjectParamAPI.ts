import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ActivateUserDto } from '../models/ActivateUserDto';
import { Activity } from '../models/Activity';
import { Address } from '../models/Address';
import { AddressDto } from '../models/AddressDto';
import { Application } from '../models/Application';
import { ApplicationStatistics } from '../models/ApplicationStatistics';
import { ApplicationsControllerMy200Response } from '../models/ApplicationsControllerMy200Response';
import { AssignApplicationDto } from '../models/AssignApplicationDto';
import { AuthConfirmEmailDto } from '../models/AuthConfirmEmailDto';
import { AuthEmailLoginDto } from '../models/AuthEmailLoginDto';
import { AuthForgotPasswordDto } from '../models/AuthForgotPasswordDto';
import { AuthRegisterLoginDto } from '../models/AuthRegisterLoginDto';
import { AuthResetPasswordDto } from '../models/AuthResetPasswordDto';
import { AuthUpdateDto } from '../models/AuthUpdateDto';
import { ChangeStatusApplicationDto } from '../models/ChangeStatusApplicationDto';
import { Company } from '../models/Company';
import { Country } from '../models/Country';
import { CreateApplicationDto } from '../models/CreateApplicationDto';
import { CreateCompanyProfileDto } from '../models/CreateCompanyProfileDto';
import { CreateIndividualProfileDto } from '../models/CreateIndividualProfileDto';
import { CreateIndividualUserDto } from '../models/CreateIndividualUserDto';
import { CreateUserDto } from '../models/CreateUserDto';
import { Document } from '../models/Document';
import { DocumentDto } from '../models/DocumentDto';
import { ErrorResponse } from '../models/ErrorResponse';
import { FileType } from '../models/FileType';
import { FilterApplicationDto } from '../models/FilterApplicationDto';
import { FilterUserDto } from '../models/FilterUserDto';
import { HealthControllerCheck200Response } from '../models/HealthControllerCheck200Response';
import { HealthControllerCheck200ResponseInfoValue } from '../models/HealthControllerCheck200ResponseInfoValue';
import { HealthControllerCheck503Response } from '../models/HealthControllerCheck503Response';
import { Individual } from '../models/Individual';
import { JobResponse } from '../models/JobResponse';
import { LoginResponseType } from '../models/LoginResponseType';
import { Mass } from '../models/Mass';
import { MassDto } from '../models/MassDto';
import { PageDto } from '../models/PageDto';
import { PageMetaDto } from '../models/PageMetaDto';
import { PermitsControllerPermitStatus200Response } from '../models/PermitsControllerPermitStatus200Response';
import { QueryApplicationDto } from '../models/QueryApplicationDto';
import { QueryUserDto } from '../models/QueryUserDto';
import { RefreshResponseType } from '../models/RefreshResponseType';
import { ReviewApplicationDto } from '../models/ReviewApplicationDto';
import { SortApplicationDto } from '../models/SortApplicationDto';
import { SortUserDto } from '../models/SortUserDto';
import { Specimen } from '../models/Specimen';
import { SpecimenAdminDto } from '../models/SpecimenAdminDto';
import { SpecimenApplicantDto } from '../models/SpecimenApplicantDto';
import { SpecimenApplicantDtoNetMass } from '../models/SpecimenApplicantDtoNetMass';
import { SpecimenCountryData } from '../models/SpecimenCountryData';
import { SpecimenCountryDataAdminDto } from '../models/SpecimenCountryDataAdminDto';
import { SpecimenCountryDataApplicantDto } from '../models/SpecimenCountryDataApplicantDto';
import { SpecimenCountryDataCountry } from '../models/SpecimenCountryDataCountry';
import { SpecimenDescription } from '../models/SpecimenDescription';
import { SpecimenDescriptionDto } from '../models/SpecimenDescriptionDto';
import { SpecimenNetMass } from '../models/SpecimenNetMass';
import { UpdateApplicationDto } from '../models/UpdateApplicationDto';
import { UpdateCompanyProfileDto } from '../models/UpdateCompanyProfileDto';
import { UpdateIndividualProfileDto } from '../models/UpdateIndividualProfileDto';
import { UpdateUserDto } from '../models/UpdateUserDto';
import { User } from '../models/User';
import { UserStatistics } from '../models/UserStatistics';
import { UsersControllerFindAll200Response } from '../models/UsersControllerFindAll200Response';

import { ObservableActivityApi } from "./ObservableAPI";
import { ActivityApiRequestFactory, ActivityApiResponseProcessor} from "../apis/ActivityApi";

export interface ActivityApiActivityControllerFindAllRequest {
    /**
     * 
     * @type string
     * @memberof ActivityApiactivityControllerFindAll
     */
    type: string
    /**
     * 
     * @type number
     * @memberof ActivityApiactivityControllerFindAll
     */
    id: number
}

export class ObjectActivityApi {
    private api: ObservableActivityApi

    public constructor(configuration: Configuration, requestFactory?: ActivityApiRequestFactory, responseProcessor?: ActivityApiResponseProcessor) {
        this.api = new ObservableActivityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public activityControllerFindAllWithHttpInfo(param: ActivityApiActivityControllerFindAllRequest, options?: Configuration): Promise<HttpInfo<Array<Activity>>> {
        return this.api.activityControllerFindAllWithHttpInfo(param.type, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public activityControllerFindAll(param: ActivityApiActivityControllerFindAllRequest, options?: Configuration): Promise<Array<Activity>> {
        return this.api.activityControllerFindAll(param.type, param.id,  options).toPromise();
    }

}

import { ObservableApplicationsApi } from "./ObservableAPI";
import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";

export interface ApplicationsApiApplicationsControllerAssignRequest {
    /**
     * 
     * @type number
     * @memberof ApplicationsApiapplicationsControllerAssign
     */
    id: number
    /**
     * 
     * @type AssignApplicationDto
     * @memberof ApplicationsApiapplicationsControllerAssign
     */
    assignApplicationDto: AssignApplicationDto
}

export interface ApplicationsApiApplicationsControllerChangeStatusRequest {
    /**
     * 
     * @type number
     * @memberof ApplicationsApiapplicationsControllerChangeStatus
     */
    id: number
    /**
     * 
     * @type ChangeStatusApplicationDto
     * @memberof ApplicationsApiapplicationsControllerChangeStatus
     */
    changeStatusApplicationDto: ChangeStatusApplicationDto
}

export interface ApplicationsApiApplicationsControllerFindAllRequest {
    /**
     * 
     * @type QueryApplicationDto
     * @memberof ApplicationsApiapplicationsControllerFindAll
     */
    queryApplicationDto: QueryApplicationDto
}

export interface ApplicationsApiApplicationsControllerFindOneRequest {
    /**
     * 
     * @type number
     * @memberof ApplicationsApiapplicationsControllerFindOne
     */
    id: number
}

export interface ApplicationsApiApplicationsControllerMyRequest {
    /**
     * 
     * @type QueryApplicationDto
     * @memberof ApplicationsApiapplicationsControllerMy
     */
    queryApplicationDto: QueryApplicationDto
}

export interface ApplicationsApiApplicationsControllerReviewRequest {
    /**
     * 
     * @type number
     * @memberof ApplicationsApiapplicationsControllerReview
     */
    id: number
    /**
     * 
     * @type ReviewApplicationDto
     * @memberof ApplicationsApiapplicationsControllerReview
     */
    reviewApplicationDto: ReviewApplicationDto
}

export interface ApplicationsApiApplicationsControllerStatisticsRequest {
}

export interface ApplicationsApiApplicationsControllerSubmitRequest {
    /**
     * 
     * @type CreateApplicationDto
     * @memberof ApplicationsApiapplicationsControllerSubmit
     */
    createApplicationDto: CreateApplicationDto
}

export interface ApplicationsApiApplicationsControllerUpdateRequest {
    /**
     * 
     * @type number
     * @memberof ApplicationsApiapplicationsControllerUpdate
     */
    id: number
    /**
     * 
     * @type UpdateApplicationDto
     * @memberof ApplicationsApiapplicationsControllerUpdate
     */
    updateApplicationDto: UpdateApplicationDto
}

export class ObjectApplicationsApi {
    private api: ObservableApplicationsApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationsApiRequestFactory, responseProcessor?: ApplicationsApiResponseProcessor) {
        this.api = new ObservableApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public applicationsControllerAssignWithHttpInfo(param: ApplicationsApiApplicationsControllerAssignRequest, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.applicationsControllerAssignWithHttpInfo(param.id, param.assignApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerAssign(param: ApplicationsApiApplicationsControllerAssignRequest, options?: Configuration): Promise<Application> {
        return this.api.applicationsControllerAssign(param.id, param.assignApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerChangeStatusWithHttpInfo(param: ApplicationsApiApplicationsControllerChangeStatusRequest, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.applicationsControllerChangeStatusWithHttpInfo(param.id, param.changeStatusApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerChangeStatus(param: ApplicationsApiApplicationsControllerChangeStatusRequest, options?: Configuration): Promise<Application> {
        return this.api.applicationsControllerChangeStatus(param.id, param.changeStatusApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerFindAllWithHttpInfo(param: ApplicationsApiApplicationsControllerFindAllRequest, options?: Configuration): Promise<HttpInfo<ApplicationsControllerMy200Response>> {
        return this.api.applicationsControllerFindAllWithHttpInfo(param.queryApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerFindAll(param: ApplicationsApiApplicationsControllerFindAllRequest, options?: Configuration): Promise<ApplicationsControllerMy200Response> {
        return this.api.applicationsControllerFindAll(param.queryApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerFindOneWithHttpInfo(param: ApplicationsApiApplicationsControllerFindOneRequest, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.applicationsControllerFindOneWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerFindOne(param: ApplicationsApiApplicationsControllerFindOneRequest, options?: Configuration): Promise<Application> {
        return this.api.applicationsControllerFindOne(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerMyWithHttpInfo(param: ApplicationsApiApplicationsControllerMyRequest, options?: Configuration): Promise<HttpInfo<ApplicationsControllerMy200Response>> {
        return this.api.applicationsControllerMyWithHttpInfo(param.queryApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerMy(param: ApplicationsApiApplicationsControllerMyRequest, options?: Configuration): Promise<ApplicationsControllerMy200Response> {
        return this.api.applicationsControllerMy(param.queryApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerReviewWithHttpInfo(param: ApplicationsApiApplicationsControllerReviewRequest, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.applicationsControllerReviewWithHttpInfo(param.id, param.reviewApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerReview(param: ApplicationsApiApplicationsControllerReviewRequest, options?: Configuration): Promise<Application> {
        return this.api.applicationsControllerReview(param.id, param.reviewApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerStatisticsWithHttpInfo(param: ApplicationsApiApplicationsControllerStatisticsRequest = {}, options?: Configuration): Promise<HttpInfo<ApplicationStatistics>> {
        return this.api.applicationsControllerStatisticsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerStatistics(param: ApplicationsApiApplicationsControllerStatisticsRequest = {}, options?: Configuration): Promise<ApplicationStatistics> {
        return this.api.applicationsControllerStatistics( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerSubmitWithHttpInfo(param: ApplicationsApiApplicationsControllerSubmitRequest, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.applicationsControllerSubmitWithHttpInfo(param.createApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerSubmit(param: ApplicationsApiApplicationsControllerSubmitRequest, options?: Configuration): Promise<Application> {
        return this.api.applicationsControllerSubmit(param.createApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerUpdateWithHttpInfo(param: ApplicationsApiApplicationsControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<Application>> {
        return this.api.applicationsControllerUpdateWithHttpInfo(param.id, param.updateApplicationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public applicationsControllerUpdate(param: ApplicationsApiApplicationsControllerUpdateRequest, options?: Configuration): Promise<Application> {
        return this.api.applicationsControllerUpdate(param.id, param.updateApplicationDto,  options).toPromise();
    }

}

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerConfirmEmailRequest {
    /**
     * 
     * @type AuthConfirmEmailDto
     * @memberof AuthApiauthControllerConfirmEmail
     */
    authConfirmEmailDto: AuthConfirmEmailDto
}

export interface AuthApiAuthControllerForgotPasswordRequest {
    /**
     * 
     * @type AuthForgotPasswordDto
     * @memberof AuthApiauthControllerForgotPassword
     */
    authForgotPasswordDto: AuthForgotPasswordDto
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type AuthEmailLoginDto
     * @memberof AuthApiauthControllerLogin
     */
    authEmailLoginDto: AuthEmailLoginDto
}

export interface AuthApiAuthControllerLogoutRequest {
}

export interface AuthApiAuthControllerMeRequest {
}

export interface AuthApiAuthControllerRefreshRequest {
}

export interface AuthApiAuthControllerRegisterRequest {
    /**
     * 
     * @type AuthRegisterLoginDto
     * @memberof AuthApiauthControllerRegister
     */
    authRegisterLoginDto: AuthRegisterLoginDto
}

export interface AuthApiAuthControllerResendVerifyMailRequest {
}

export interface AuthApiAuthControllerResetPasswordRequest {
    /**
     * 
     * @type AuthResetPasswordDto
     * @memberof AuthApiauthControllerResetPassword
     */
    authResetPasswordDto: AuthResetPasswordDto
}

export interface AuthApiAuthControllerUpdateRequest {
    /**
     * 
     * @type AuthUpdateDto
     * @memberof AuthApiauthControllerUpdate
     */
    authUpdateDto: AuthUpdateDto
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authControllerConfirmEmailWithHttpInfo(param: AuthApiAuthControllerConfirmEmailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerConfirmEmailWithHttpInfo(param.authConfirmEmailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerConfirmEmail(param: AuthApiAuthControllerConfirmEmailRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerConfirmEmail(param.authConfirmEmailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgotPasswordWithHttpInfo(param: AuthApiAuthControllerForgotPasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerForgotPasswordWithHttpInfo(param.authForgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgotPassword(param: AuthApiAuthControllerForgotPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerForgotPassword(param.authForgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<HttpInfo<LoginResponseType>> {
        return this.api.authControllerLoginWithHttpInfo(param.authEmailLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: Configuration): Promise<LoginResponseType> {
        return this.api.authControllerLogin(param.authEmailLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogoutWithHttpInfo(param: AuthApiAuthControllerLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogout(param: AuthApiAuthControllerLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerLogout( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMeWithHttpInfo(param: AuthApiAuthControllerMeRequest = {}, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.authControllerMeWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMe(param: AuthApiAuthControllerMeRequest = {}, options?: Configuration): Promise<User> {
        return this.api.authControllerMe( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRefreshWithHttpInfo(param: AuthApiAuthControllerRefreshRequest = {}, options?: Configuration): Promise<HttpInfo<RefreshResponseType>> {
        return this.api.authControllerRefreshWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRefresh(param: AuthApiAuthControllerRefreshRequest = {}, options?: Configuration): Promise<RefreshResponseType> {
        return this.api.authControllerRefresh( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRegisterWithHttpInfo(param: AuthApiAuthControllerRegisterRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerRegisterWithHttpInfo(param.authRegisterLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerRegister(param: AuthApiAuthControllerRegisterRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerRegister(param.authRegisterLoginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResendVerifyMailWithHttpInfo(param: AuthApiAuthControllerResendVerifyMailRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerResendVerifyMailWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResendVerifyMail(param: AuthApiAuthControllerResendVerifyMailRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerResendVerifyMail( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResetPasswordWithHttpInfo(param: AuthApiAuthControllerResetPasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerResetPasswordWithHttpInfo(param.authResetPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerResetPassword(param: AuthApiAuthControllerResetPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.authControllerResetPassword(param.authResetPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateWithHttpInfo(param: AuthApiAuthControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.authControllerUpdateWithHttpInfo(param.authUpdateDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdate(param: AuthApiAuthControllerUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.authControllerUpdate(param.authUpdateDto,  options).toPromise();
    }

}

import { ObservableCountriesApi } from "./ObservableAPI";
import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";

export interface CountriesApiCountriesControllerFindAllRequest {
}

export class ObjectCountriesApi {
    private api: ObservableCountriesApi

    public constructor(configuration: Configuration, requestFactory?: CountriesApiRequestFactory, responseProcessor?: CountriesApiResponseProcessor) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public countriesControllerFindAllWithHttpInfo(param: CountriesApiCountriesControllerFindAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        return this.api.countriesControllerFindAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerFindAll(param: CountriesApiCountriesControllerFindAllRequest = {}, options?: Configuration): Promise<Array<Country>> {
        return this.api.countriesControllerFindAll( options).toPromise();
    }

}

import { ObservableFilesApi } from "./ObservableAPI";
import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";

export interface FilesApiFilesLocalControllerUploadFileRequest {
    /**
     * 
     * @type HttpFile
     * @memberof FilesApifilesLocalControllerUploadFile
     */
    file?: HttpFile
}

export class ObjectFilesApi {
    private api: ObservableFilesApi

    public constructor(configuration: Configuration, requestFactory?: FilesApiRequestFactory, responseProcessor?: FilesApiResponseProcessor) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public filesLocalControllerUploadFileWithHttpInfo(param: FilesApiFilesLocalControllerUploadFileRequest = {}, options?: Configuration): Promise<HttpInfo<FileType>> {
        return this.api.filesLocalControllerUploadFileWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public filesLocalControllerUploadFile(param: FilesApiFilesLocalControllerUploadFileRequest = {}, options?: Configuration): Promise<FileType> {
        return this.api.filesLocalControllerUploadFile(param.file,  options).toPromise();
    }

}

import { ObservableHealthApi } from "./ObservableAPI";
import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";

export interface HealthApiHealthControllerCheckRequest {
}

export class ObjectHealthApi {
    private api: ObservableHealthApi

    public constructor(configuration: Configuration, requestFactory?: HealthApiRequestFactory, responseProcessor?: HealthApiResponseProcessor) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public healthControllerCheckWithHttpInfo(param: HealthApiHealthControllerCheckRequest = {}, options?: Configuration): Promise<HttpInfo<HealthControllerCheck200Response>> {
        return this.api.healthControllerCheckWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public healthControllerCheck(param: HealthApiHealthControllerCheckRequest = {}, options?: Configuration): Promise<HealthControllerCheck200Response> {
        return this.api.healthControllerCheck( options).toPromise();
    }

}

import { ObservableHomeApi } from "./ObservableAPI";
import { HomeApiRequestFactory, HomeApiResponseProcessor} from "../apis/HomeApi";

export interface HomeApiHomeControllerAppInfoRequest {
}

export class ObjectHomeApi {
    private api: ObservableHomeApi

    public constructor(configuration: Configuration, requestFactory?: HomeApiRequestFactory, responseProcessor?: HomeApiResponseProcessor) {
        this.api = new ObservableHomeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public homeControllerAppInfoWithHttpInfo(param: HomeApiHomeControllerAppInfoRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.homeControllerAppInfoWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public homeControllerAppInfo(param: HomeApiHomeControllerAppInfoRequest = {}, options?: Configuration): Promise<void> {
        return this.api.homeControllerAppInfo( options).toPromise();
    }

}

import { ObservablePermitsApi } from "./ObservableAPI";
import { PermitsApiRequestFactory, PermitsApiResponseProcessor} from "../apis/PermitsApi";

export interface PermitsApiPermitsControllerPermitRequest {
    /**
     * 
     * @type number
     * @memberof PermitsApipermitsControllerPermit
     */
    id: number
}

export interface PermitsApiPermitsControllerPermitStatusRequest {
    /**
     * 
     * @type number
     * @memberof PermitsApipermitsControllerPermitStatus
     */
    id: number
}

export class ObjectPermitsApi {
    private api: ObservablePermitsApi

    public constructor(configuration: Configuration, requestFactory?: PermitsApiRequestFactory, responseProcessor?: PermitsApiResponseProcessor) {
        this.api = new ObservablePermitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public permitsControllerPermitWithHttpInfo(param: PermitsApiPermitsControllerPermitRequest, options?: Configuration): Promise<HttpInfo<FileType>> {
        return this.api.permitsControllerPermitWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public permitsControllerPermit(param: PermitsApiPermitsControllerPermitRequest, options?: Configuration): Promise<FileType> {
        return this.api.permitsControllerPermit(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public permitsControllerPermitStatusWithHttpInfo(param: PermitsApiPermitsControllerPermitStatusRequest, options?: Configuration): Promise<HttpInfo<PermitsControllerPermitStatus200Response>> {
        return this.api.permitsControllerPermitStatusWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public permitsControllerPermitStatus(param: PermitsApiPermitsControllerPermitStatusRequest, options?: Configuration): Promise<PermitsControllerPermitStatus200Response> {
        return this.api.permitsControllerPermitStatus(param.id,  options).toPromise();
    }

}

import { ObservableProfilesApi } from "./ObservableAPI";
import { ProfilesApiRequestFactory, ProfilesApiResponseProcessor} from "../apis/ProfilesApi";

export interface ProfilesApiProfilesControllerCreateCompanyRequest {
    /**
     * 
     * @type CreateCompanyProfileDto
     * @memberof ProfilesApiprofilesControllerCreateCompany
     */
    createCompanyProfileDto: CreateCompanyProfileDto
}

export interface ProfilesApiProfilesControllerCreateIndividualRequest {
    /**
     * 
     * @type CreateIndividualProfileDto
     * @memberof ProfilesApiprofilesControllerCreateIndividual
     */
    createIndividualProfileDto: CreateIndividualProfileDto
}

export interface ProfilesApiProfilesControllerUpdateCompanyRequest {
    /**
     * 
     * @type UpdateCompanyProfileDto
     * @memberof ProfilesApiprofilesControllerUpdateCompany
     */
    updateCompanyProfileDto: UpdateCompanyProfileDto
}

export interface ProfilesApiProfilesControllerUpdateIndividualRequest {
    /**
     * 
     * @type UpdateIndividualProfileDto
     * @memberof ProfilesApiprofilesControllerUpdateIndividual
     */
    updateIndividualProfileDto: UpdateIndividualProfileDto
}

export class ObjectProfilesApi {
    private api: ObservableProfilesApi

    public constructor(configuration: Configuration, requestFactory?: ProfilesApiRequestFactory, responseProcessor?: ProfilesApiResponseProcessor) {
        this.api = new ObservableProfilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public profilesControllerCreateCompanyWithHttpInfo(param: ProfilesApiProfilesControllerCreateCompanyRequest, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.profilesControllerCreateCompanyWithHttpInfo(param.createCompanyProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerCreateCompany(param: ProfilesApiProfilesControllerCreateCompanyRequest, options?: Configuration): Promise<Company> {
        return this.api.profilesControllerCreateCompany(param.createCompanyProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerCreateIndividualWithHttpInfo(param: ProfilesApiProfilesControllerCreateIndividualRequest, options?: Configuration): Promise<HttpInfo<Individual>> {
        return this.api.profilesControllerCreateIndividualWithHttpInfo(param.createIndividualProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerCreateIndividual(param: ProfilesApiProfilesControllerCreateIndividualRequest, options?: Configuration): Promise<Individual> {
        return this.api.profilesControllerCreateIndividual(param.createIndividualProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerUpdateCompanyWithHttpInfo(param: ProfilesApiProfilesControllerUpdateCompanyRequest, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.profilesControllerUpdateCompanyWithHttpInfo(param.updateCompanyProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerUpdateCompany(param: ProfilesApiProfilesControllerUpdateCompanyRequest, options?: Configuration): Promise<Company> {
        return this.api.profilesControllerUpdateCompany(param.updateCompanyProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerUpdateIndividualWithHttpInfo(param: ProfilesApiProfilesControllerUpdateIndividualRequest, options?: Configuration): Promise<HttpInfo<Individual>> {
        return this.api.profilesControllerUpdateIndividualWithHttpInfo(param.updateIndividualProfileDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public profilesControllerUpdateIndividual(param: ProfilesApiProfilesControllerUpdateIndividualRequest, options?: Configuration): Promise<Individual> {
        return this.api.profilesControllerUpdateIndividual(param.updateIndividualProfileDto,  options).toPromise();
    }

}

import { ObservableReportsApi } from "./ObservableAPI";
import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";

export interface ReportsApiReportsControllerReportRequest {
    /**
     * 
     * @type number
     * @memberof ReportsApireportsControllerReport
     */
    year: number
    /**
     * 
     * @type string
     * @memberof ReportsApireportsControllerReport
     */
    num: string
}

export class ObjectReportsApi {
    private api: ObservableReportsApi

    public constructor(configuration: Configuration, requestFactory?: ReportsApiRequestFactory, responseProcessor?: ReportsApiResponseProcessor) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public reportsControllerReportWithHttpInfo(param: ReportsApiReportsControllerReportRequest, options?: Configuration): Promise<HttpInfo<FileType>> {
        return this.api.reportsControllerReportWithHttpInfo(param.year, param.num,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public reportsControllerReport(param: ReportsApiReportsControllerReportRequest, options?: Configuration): Promise<FileType> {
        return this.api.reportsControllerReport(param.year, param.num,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersControllerActivateRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerActivate
     */
    id: string
    /**
     * 
     * @type ActivateUserDto
     * @memberof UsersApiusersControllerActivate
     */
    activateUserDto: ActivateUserDto
}

export interface UsersApiUsersControllerCreateRequest {
    /**
     * 
     * @type CreateUserDto
     * @memberof UsersApiusersControllerCreate
     */
    createUserDto: CreateUserDto
}

export interface UsersApiUsersControllerCreateIndividualRequest {
    /**
     * 
     * @type CreateIndividualUserDto
     * @memberof UsersApiusersControllerCreateIndividual
     */
    createIndividualUserDto: CreateIndividualUserDto
}

export interface UsersApiUsersControllerFindAllRequest {
    /**
     * 
     * @type QueryUserDto
     * @memberof UsersApiusersControllerFindAll
     */
    queryUserDto: QueryUserDto
}

export interface UsersApiUsersControllerFindOneRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerFindOne
     */
    id: string
}

export interface UsersApiUsersControllerStatisticsRequest {
}

export interface UsersApiUsersControllerUpdateRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersControllerUpdate
     */
    id: string
    /**
     * 
     * @type UpdateUserDto
     * @memberof UsersApiusersControllerUpdate
     */
    updateUserDto: UpdateUserDto
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public usersControllerActivateWithHttpInfo(param: UsersApiUsersControllerActivateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerActivateWithHttpInfo(param.id, param.activateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerActivate(param: UsersApiUsersControllerActivateRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerActivate(param.id, param.activateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateWithHttpInfo(param: UsersApiUsersControllerCreateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerCreateWithHttpInfo(param.createUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreate(param: UsersApiUsersControllerCreateRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerCreate(param.createUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateIndividualWithHttpInfo(param: UsersApiUsersControllerCreateIndividualRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerCreateIndividualWithHttpInfo(param.createIndividualUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerCreateIndividual(param: UsersApiUsersControllerCreateIndividualRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerCreateIndividual(param.createIndividualUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindAllWithHttpInfo(param: UsersApiUsersControllerFindAllRequest, options?: Configuration): Promise<HttpInfo<UsersControllerFindAll200Response>> {
        return this.api.usersControllerFindAllWithHttpInfo(param.queryUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindAll(param: UsersApiUsersControllerFindAllRequest, options?: Configuration): Promise<UsersControllerFindAll200Response> {
        return this.api.usersControllerFindAll(param.queryUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindOneWithHttpInfo(param: UsersApiUsersControllerFindOneRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerFindOneWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerFindOne(param: UsersApiUsersControllerFindOneRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerFindOne(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerStatisticsWithHttpInfo(param: UsersApiUsersControllerStatisticsRequest = {}, options?: Configuration): Promise<HttpInfo<UserStatistics>> {
        return this.api.usersControllerStatisticsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerStatistics(param: UsersApiUsersControllerStatisticsRequest = {}, options?: Configuration): Promise<UserStatistics> {
        return this.api.usersControllerStatistics( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerUpdateWithHttpInfo(param: UsersApiUsersControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<User>> {
        return this.api.usersControllerUpdateWithHttpInfo(param.id, param.updateUserDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public usersControllerUpdate(param: UsersApiUsersControllerUpdateRequest, options?: Configuration): Promise<User> {
        return this.api.usersControllerUpdate(param.id, param.updateUserDto,  options).toPromise();
    }

}
