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
import { ObservableActivityApi } from './ObservableAPI';

import { ActivityApiRequestFactory, ActivityApiResponseProcessor} from "../apis/ActivityApi";
export class PromiseActivityApi {
    private api: ObservableActivityApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ActivityApiRequestFactory,
        responseProcessor?: ActivityApiResponseProcessor
    ) {
        this.api = new ObservableActivityApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param type 
     * @param id 
     */
    public activityControllerFindAllWithHttpInfo(type: string, id: number, _options?: Configuration): Promise<HttpInfo<Array<Activity>>> {
        const result = this.api.activityControllerFindAllWithHttpInfo(type, id, _options);
        return result.toPromise();
    }

    /**
     * @param type 
     * @param id 
     */
    public activityControllerFindAll(type: string, id: number, _options?: Configuration): Promise<Array<Activity>> {
        const result = this.api.activityControllerFindAll(type, id, _options);
        return result.toPromise();
    }


}



import { ObservableApplicationsApi } from './ObservableAPI';

import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";
export class PromiseApplicationsApi {
    private api: ObservableApplicationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsApiRequestFactory,
        responseProcessor?: ApplicationsApiResponseProcessor
    ) {
        this.api = new ObservableApplicationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param assignApplicationDto 
     */
    public applicationsControllerAssignWithHttpInfo(id: number, assignApplicationDto: AssignApplicationDto, _options?: Configuration): Promise<HttpInfo<Application>> {
        const result = this.api.applicationsControllerAssignWithHttpInfo(id, assignApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param assignApplicationDto 
     */
    public applicationsControllerAssign(id: number, assignApplicationDto: AssignApplicationDto, _options?: Configuration): Promise<Application> {
        const result = this.api.applicationsControllerAssign(id, assignApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param changeStatusApplicationDto 
     */
    public applicationsControllerChangeStatusWithHttpInfo(id: number, changeStatusApplicationDto: ChangeStatusApplicationDto, _options?: Configuration): Promise<HttpInfo<Application>> {
        const result = this.api.applicationsControllerChangeStatusWithHttpInfo(id, changeStatusApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param changeStatusApplicationDto 
     */
    public applicationsControllerChangeStatus(id: number, changeStatusApplicationDto: ChangeStatusApplicationDto, _options?: Configuration): Promise<Application> {
        const result = this.api.applicationsControllerChangeStatus(id, changeStatusApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerFindAllWithHttpInfo(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Promise<HttpInfo<ApplicationsControllerMy200Response>> {
        const result = this.api.applicationsControllerFindAllWithHttpInfo(queryApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerFindAll(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Promise<ApplicationsControllerMy200Response> {
        const result = this.api.applicationsControllerFindAll(queryApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public applicationsControllerFindOneWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<Application>> {
        const result = this.api.applicationsControllerFindOneWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public applicationsControllerFindOne(id: number, _options?: Configuration): Promise<Application> {
        const result = this.api.applicationsControllerFindOne(id, _options);
        return result.toPromise();
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerMyWithHttpInfo(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Promise<HttpInfo<ApplicationsControllerMy200Response>> {
        const result = this.api.applicationsControllerMyWithHttpInfo(queryApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerMy(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Promise<ApplicationsControllerMy200Response> {
        const result = this.api.applicationsControllerMy(queryApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param reviewApplicationDto 
     */
    public applicationsControllerReviewWithHttpInfo(id: number, reviewApplicationDto: ReviewApplicationDto, _options?: Configuration): Promise<HttpInfo<Application>> {
        const result = this.api.applicationsControllerReviewWithHttpInfo(id, reviewApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param reviewApplicationDto 
     */
    public applicationsControllerReview(id: number, reviewApplicationDto: ReviewApplicationDto, _options?: Configuration): Promise<Application> {
        const result = this.api.applicationsControllerReview(id, reviewApplicationDto, _options);
        return result.toPromise();
    }

    /**
     */
    public applicationsControllerStatisticsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<ApplicationStatistics>> {
        const result = this.api.applicationsControllerStatisticsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public applicationsControllerStatistics(_options?: Configuration): Promise<ApplicationStatistics> {
        const result = this.api.applicationsControllerStatistics(_options);
        return result.toPromise();
    }

    /**
     * @param createApplicationDto 
     */
    public applicationsControllerSubmitWithHttpInfo(createApplicationDto: CreateApplicationDto, _options?: Configuration): Promise<HttpInfo<Application>> {
        const result = this.api.applicationsControllerSubmitWithHttpInfo(createApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param createApplicationDto 
     */
    public applicationsControllerSubmit(createApplicationDto: CreateApplicationDto, _options?: Configuration): Promise<Application> {
        const result = this.api.applicationsControllerSubmit(createApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateApplicationDto 
     */
    public applicationsControllerUpdateWithHttpInfo(id: number, updateApplicationDto: UpdateApplicationDto, _options?: Configuration): Promise<HttpInfo<Application>> {
        const result = this.api.applicationsControllerUpdateWithHttpInfo(id, updateApplicationDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateApplicationDto 
     */
    public applicationsControllerUpdate(id: number, updateApplicationDto: UpdateApplicationDto, _options?: Configuration): Promise<Application> {
        const result = this.api.applicationsControllerUpdate(id, updateApplicationDto, _options);
        return result.toPromise();
    }


}



import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authConfirmEmailDto 
     */
    public authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto, _options);
        return result.toPromise();
    }

    /**
     * @param authConfirmEmailDto 
     */
    public authControllerConfirmEmail(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerConfirmEmail(authConfirmEmailDto, _options);
        return result.toPromise();
    }

    /**
     * @param authForgotPasswordDto 
     */
    public authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authForgotPasswordDto 
     */
    public authControllerForgotPassword(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerForgotPassword(authForgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authEmailLoginDto 
     */
    public authControllerLoginWithHttpInfo(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Promise<HttpInfo<LoginResponseType>> {
        const result = this.api.authControllerLoginWithHttpInfo(authEmailLoginDto, _options);
        return result.toPromise();
    }

    /**
     * @param authEmailLoginDto 
     */
    public authControllerLogin(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Promise<LoginResponseType> {
        const result = this.api.authControllerLogin(authEmailLoginDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerLogoutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerLogoutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerLogout(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerLogout(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.authControllerMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMe(_options?: Configuration): Promise<User> {
        const result = this.api.authControllerMe(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerRefreshWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RefreshResponseType>> {
        const result = this.api.authControllerRefreshWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerRefresh(_options?: Configuration): Promise<RefreshResponseType> {
        const result = this.api.authControllerRefresh(_options);
        return result.toPromise();
    }

    /**
     * @param authRegisterLoginDto 
     */
    public authControllerRegisterWithHttpInfo(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerRegisterWithHttpInfo(authRegisterLoginDto, _options);
        return result.toPromise();
    }

    /**
     * @param authRegisterLoginDto 
     */
    public authControllerRegister(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerRegister(authRegisterLoginDto, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerResendVerifyMailWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerResendVerifyMailWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerResendVerifyMail(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerResendVerifyMail(_options);
        return result.toPromise();
    }

    /**
     * @param authResetPasswordDto 
     */
    public authControllerResetPasswordWithHttpInfo(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerResetPasswordWithHttpInfo(authResetPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authResetPasswordDto 
     */
    public authControllerResetPassword(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerResetPassword(authResetPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param authUpdateDto 
     */
    public authControllerUpdateWithHttpInfo(authUpdateDto: AuthUpdateDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.authControllerUpdateWithHttpInfo(authUpdateDto, _options);
        return result.toPromise();
    }

    /**
     * @param authUpdateDto 
     */
    public authControllerUpdate(authUpdateDto: AuthUpdateDto, _options?: Configuration): Promise<User> {
        const result = this.api.authControllerUpdate(authUpdateDto, _options);
        return result.toPromise();
    }


}



import { ObservableCountriesApi } from './ObservableAPI';

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class PromiseCountriesApi {
    private api: ObservableCountriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public countriesControllerFindAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        const result = this.api.countriesControllerFindAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public countriesControllerFindAll(_options?: Configuration): Promise<Array<Country>> {
        const result = this.api.countriesControllerFindAll(_options);
        return result.toPromise();
    }


}



import { ObservableFilesApi } from './ObservableAPI';

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class PromiseFilesApi {
    private api: ObservableFilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.api = new ObservableFilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param file 
     */
    public filesLocalControllerUploadFileWithHttpInfo(file?: HttpFile, _options?: Configuration): Promise<HttpInfo<FileType>> {
        const result = this.api.filesLocalControllerUploadFileWithHttpInfo(file, _options);
        return result.toPromise();
    }

    /**
     * @param file 
     */
    public filesLocalControllerUploadFile(file?: HttpFile, _options?: Configuration): Promise<FileType> {
        const result = this.api.filesLocalControllerUploadFile(file, _options);
        return result.toPromise();
    }


}



import { ObservableHealthApi } from './ObservableAPI';

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class PromiseHealthApi {
    private api: ObservableHealthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.api = new ObservableHealthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public healthControllerCheckWithHttpInfo(_options?: Configuration): Promise<HttpInfo<HealthControllerCheck200Response>> {
        const result = this.api.healthControllerCheckWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public healthControllerCheck(_options?: Configuration): Promise<HealthControllerCheck200Response> {
        const result = this.api.healthControllerCheck(_options);
        return result.toPromise();
    }


}



import { ObservableHomeApi } from './ObservableAPI';

import { HomeApiRequestFactory, HomeApiResponseProcessor} from "../apis/HomeApi";
export class PromiseHomeApi {
    private api: ObservableHomeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HomeApiRequestFactory,
        responseProcessor?: HomeApiResponseProcessor
    ) {
        this.api = new ObservableHomeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public homeControllerAppInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.homeControllerAppInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public homeControllerAppInfo(_options?: Configuration): Promise<void> {
        const result = this.api.homeControllerAppInfo(_options);
        return result.toPromise();
    }


}



import { ObservablePermitsApi } from './ObservableAPI';

import { PermitsApiRequestFactory, PermitsApiResponseProcessor} from "../apis/PermitsApi";
export class PromisePermitsApi {
    private api: ObservablePermitsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PermitsApiRequestFactory,
        responseProcessor?: PermitsApiResponseProcessor
    ) {
        this.api = new ObservablePermitsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     */
    public permitsControllerPermitWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<FileType>> {
        const result = this.api.permitsControllerPermitWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public permitsControllerPermit(id: number, _options?: Configuration): Promise<FileType> {
        const result = this.api.permitsControllerPermit(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public permitsControllerPermitStatusWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<PermitsControllerPermitStatus200Response>> {
        const result = this.api.permitsControllerPermitStatusWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public permitsControllerPermitStatus(id: number, _options?: Configuration): Promise<PermitsControllerPermitStatus200Response> {
        const result = this.api.permitsControllerPermitStatus(id, _options);
        return result.toPromise();
    }


}



import { ObservableProfilesApi } from './ObservableAPI';

import { ProfilesApiRequestFactory, ProfilesApiResponseProcessor} from "../apis/ProfilesApi";
export class PromiseProfilesApi {
    private api: ObservableProfilesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProfilesApiRequestFactory,
        responseProcessor?: ProfilesApiResponseProcessor
    ) {
        this.api = new ObservableProfilesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createCompanyProfileDto 
     */
    public profilesControllerCreateCompanyWithHttpInfo(createCompanyProfileDto: CreateCompanyProfileDto, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.profilesControllerCreateCompanyWithHttpInfo(createCompanyProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param createCompanyProfileDto 
     */
    public profilesControllerCreateCompany(createCompanyProfileDto: CreateCompanyProfileDto, _options?: Configuration): Promise<Company> {
        const result = this.api.profilesControllerCreateCompany(createCompanyProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualProfileDto 
     */
    public profilesControllerCreateIndividualWithHttpInfo(createIndividualProfileDto: CreateIndividualProfileDto, _options?: Configuration): Promise<HttpInfo<Individual>> {
        const result = this.api.profilesControllerCreateIndividualWithHttpInfo(createIndividualProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualProfileDto 
     */
    public profilesControllerCreateIndividual(createIndividualProfileDto: CreateIndividualProfileDto, _options?: Configuration): Promise<Individual> {
        const result = this.api.profilesControllerCreateIndividual(createIndividualProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param updateCompanyProfileDto 
     */
    public profilesControllerUpdateCompanyWithHttpInfo(updateCompanyProfileDto: UpdateCompanyProfileDto, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.profilesControllerUpdateCompanyWithHttpInfo(updateCompanyProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param updateCompanyProfileDto 
     */
    public profilesControllerUpdateCompany(updateCompanyProfileDto: UpdateCompanyProfileDto, _options?: Configuration): Promise<Company> {
        const result = this.api.profilesControllerUpdateCompany(updateCompanyProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param updateIndividualProfileDto 
     */
    public profilesControllerUpdateIndividualWithHttpInfo(updateIndividualProfileDto: UpdateIndividualProfileDto, _options?: Configuration): Promise<HttpInfo<Individual>> {
        const result = this.api.profilesControllerUpdateIndividualWithHttpInfo(updateIndividualProfileDto, _options);
        return result.toPromise();
    }

    /**
     * @param updateIndividualProfileDto 
     */
    public profilesControllerUpdateIndividual(updateIndividualProfileDto: UpdateIndividualProfileDto, _options?: Configuration): Promise<Individual> {
        const result = this.api.profilesControllerUpdateIndividual(updateIndividualProfileDto, _options);
        return result.toPromise();
    }


}



import { ObservableReportsApi } from './ObservableAPI';

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class PromiseReportsApi {
    private api: ObservableReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param year 
     * @param num 
     */
    public reportsControllerReportWithHttpInfo(year: number, num: string, _options?: Configuration): Promise<HttpInfo<FileType>> {
        const result = this.api.reportsControllerReportWithHttpInfo(year, num, _options);
        return result.toPromise();
    }

    /**
     * @param year 
     * @param num 
     */
    public reportsControllerReport(year: number, num: string, _options?: Configuration): Promise<FileType> {
        const result = this.api.reportsControllerReport(year, num, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param activateUserDto 
     */
    public usersControllerActivateWithHttpInfo(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerActivateWithHttpInfo(id, activateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param activateUserDto 
     */
    public usersControllerActivate(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerActivate(id, activateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createUserDto 
     */
    public usersControllerCreateWithHttpInfo(createUserDto: CreateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerCreateWithHttpInfo(createUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createUserDto 
     */
    public usersControllerCreate(createUserDto: CreateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerCreate(createUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualUserDto 
     */
    public usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param createIndividualUserDto 
     */
    public usersControllerCreateIndividual(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerCreateIndividual(createIndividualUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryUserDto 
     */
    public usersControllerFindAllWithHttpInfo(queryUserDto: QueryUserDto, _options?: Configuration): Promise<HttpInfo<UsersControllerFindAll200Response>> {
        const result = this.api.usersControllerFindAllWithHttpInfo(queryUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param queryUserDto 
     */
    public usersControllerFindAll(queryUserDto: QueryUserDto, _options?: Configuration): Promise<UsersControllerFindAll200Response> {
        const result = this.api.usersControllerFindAll(queryUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public usersControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerFindOneWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public usersControllerFindOne(id: string, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerFindOne(id, _options);
        return result.toPromise();
    }

    /**
     */
    public usersControllerStatisticsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserStatistics>> {
        const result = this.api.usersControllerStatisticsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public usersControllerStatistics(_options?: Configuration): Promise<UserStatistics> {
        const result = this.api.usersControllerStatistics(_options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateUserDto 
     */
    public usersControllerUpdateWithHttpInfo(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<HttpInfo<User>> {
        const result = this.api.usersControllerUpdateWithHttpInfo(id, updateUserDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateUserDto 
     */
    public usersControllerUpdate(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Promise<User> {
        const result = this.api.usersControllerUpdate(id, updateUserDto, _options);
        return result.toPromise();
    }


}



