import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ActivityApiRequestFactory, ActivityApiResponseProcessor} from "../apis/ActivityApi";
export class ObservableActivityApi {
    private requestFactory: ActivityApiRequestFactory;
    private responseProcessor: ActivityApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ActivityApiRequestFactory,
        responseProcessor?: ActivityApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ActivityApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ActivityApiResponseProcessor();
    }

    /**
     * @param type 
     * @param id 
     */
    public activityControllerFindAllWithHttpInfo(type: string, id: number, _options?: Configuration): Observable<HttpInfo<Array<Activity>>> {
        const requestContextPromise = this.requestFactory.activityControllerFindAll(type, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.activityControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param type 
     * @param id 
     */
    public activityControllerFindAll(type: string, id: number, _options?: Configuration): Observable<Array<Activity>> {
        return this.activityControllerFindAllWithHttpInfo(type, id, _options).pipe(map((apiResponse: HttpInfo<Array<Activity>>) => apiResponse.data));
    }

}

import { ApplicationsApiRequestFactory, ApplicationsApiResponseProcessor} from "../apis/ApplicationsApi";
export class ObservableApplicationsApi {
    private requestFactory: ApplicationsApiRequestFactory;
    private responseProcessor: ApplicationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationsApiRequestFactory,
        responseProcessor?: ApplicationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationsApiResponseProcessor();
    }

    /**
     * @param id 
     * @param assignApplicationDto 
     */
    public applicationsControllerAssignWithHttpInfo(id: number, assignApplicationDto: AssignApplicationDto, _options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.applicationsControllerAssign(id, assignApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerAssignWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param assignApplicationDto 
     */
    public applicationsControllerAssign(id: number, assignApplicationDto: AssignApplicationDto, _options?: Configuration): Observable<Application> {
        return this.applicationsControllerAssignWithHttpInfo(id, assignApplicationDto, _options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param changeStatusApplicationDto 
     */
    public applicationsControllerChangeStatusWithHttpInfo(id: number, changeStatusApplicationDto: ChangeStatusApplicationDto, _options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.applicationsControllerChangeStatus(id, changeStatusApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerChangeStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param changeStatusApplicationDto 
     */
    public applicationsControllerChangeStatus(id: number, changeStatusApplicationDto: ChangeStatusApplicationDto, _options?: Configuration): Observable<Application> {
        return this.applicationsControllerChangeStatusWithHttpInfo(id, changeStatusApplicationDto, _options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerFindAllWithHttpInfo(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Observable<HttpInfo<ApplicationsControllerMy200Response>> {
        const requestContextPromise = this.requestFactory.applicationsControllerFindAll(queryApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerFindAll(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Observable<ApplicationsControllerMy200Response> {
        return this.applicationsControllerFindAllWithHttpInfo(queryApplicationDto, _options).pipe(map((apiResponse: HttpInfo<ApplicationsControllerMy200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public applicationsControllerFindOneWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.applicationsControllerFindOne(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerFindOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public applicationsControllerFindOne(id: number, _options?: Configuration): Observable<Application> {
        return this.applicationsControllerFindOneWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerMyWithHttpInfo(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Observable<HttpInfo<ApplicationsControllerMy200Response>> {
        const requestContextPromise = this.requestFactory.applicationsControllerMy(queryApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerMyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param queryApplicationDto 
     */
    public applicationsControllerMy(queryApplicationDto: QueryApplicationDto, _options?: Configuration): Observable<ApplicationsControllerMy200Response> {
        return this.applicationsControllerMyWithHttpInfo(queryApplicationDto, _options).pipe(map((apiResponse: HttpInfo<ApplicationsControllerMy200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param reviewApplicationDto 
     */
    public applicationsControllerReviewWithHttpInfo(id: number, reviewApplicationDto: ReviewApplicationDto, _options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.applicationsControllerReview(id, reviewApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerReviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param reviewApplicationDto 
     */
    public applicationsControllerReview(id: number, reviewApplicationDto: ReviewApplicationDto, _options?: Configuration): Observable<Application> {
        return this.applicationsControllerReviewWithHttpInfo(id, reviewApplicationDto, _options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

    /**
     */
    public applicationsControllerStatisticsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<ApplicationStatistics>> {
        const requestContextPromise = this.requestFactory.applicationsControllerStatistics(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerStatisticsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public applicationsControllerStatistics(_options?: Configuration): Observable<ApplicationStatistics> {
        return this.applicationsControllerStatisticsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<ApplicationStatistics>) => apiResponse.data));
    }

    /**
     * @param createApplicationDto 
     */
    public applicationsControllerSubmitWithHttpInfo(createApplicationDto: CreateApplicationDto, _options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.applicationsControllerSubmit(createApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerSubmitWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createApplicationDto 
     */
    public applicationsControllerSubmit(createApplicationDto: CreateApplicationDto, _options?: Configuration): Observable<Application> {
        return this.applicationsControllerSubmitWithHttpInfo(createApplicationDto, _options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param updateApplicationDto 
     */
    public applicationsControllerUpdateWithHttpInfo(id: number, updateApplicationDto: UpdateApplicationDto, _options?: Configuration): Observable<HttpInfo<Application>> {
        const requestContextPromise = this.requestFactory.applicationsControllerUpdate(id, updateApplicationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param updateApplicationDto 
     */
    public applicationsControllerUpdate(id: number, updateApplicationDto: UpdateApplicationDto, _options?: Configuration): Observable<Application> {
        return this.applicationsControllerUpdateWithHttpInfo(id, updateApplicationDto, _options).pipe(map((apiResponse: HttpInfo<Application>) => apiResponse.data));
    }

}

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * @param authConfirmEmailDto 
     */
    public authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerConfirmEmail(authConfirmEmailDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerConfirmEmailWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authConfirmEmailDto 
     */
    public authControllerConfirmEmail(authConfirmEmailDto: AuthConfirmEmailDto, _options?: Configuration): Observable<void> {
        return this.authControllerConfirmEmailWithHttpInfo(authConfirmEmailDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authForgotPasswordDto 
     */
    public authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerForgotPassword(authForgotPasswordDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerForgotPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authForgotPasswordDto 
     */
    public authControllerForgotPassword(authForgotPasswordDto: AuthForgotPasswordDto, _options?: Configuration): Observable<void> {
        return this.authControllerForgotPasswordWithHttpInfo(authForgotPasswordDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authEmailLoginDto 
     */
    public authControllerLoginWithHttpInfo(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Observable<HttpInfo<LoginResponseType>> {
        const requestContextPromise = this.requestFactory.authControllerLogin(authEmailLoginDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authEmailLoginDto 
     */
    public authControllerLogin(authEmailLoginDto: AuthEmailLoginDto, _options?: Configuration): Observable<LoginResponseType> {
        return this.authControllerLoginWithHttpInfo(authEmailLoginDto, _options).pipe(map((apiResponse: HttpInfo<LoginResponseType>) => apiResponse.data));
    }

    /**
     */
    public authControllerLogoutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerLogout(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLogoutWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerLogout(_options?: Configuration): Observable<void> {
        return this.authControllerLogoutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public authControllerMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.authControllerMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerMeWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerMe(_options?: Configuration): Observable<User> {
        return this.authControllerMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public authControllerRefreshWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RefreshResponseType>> {
        const requestContextPromise = this.requestFactory.authControllerRefresh(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRefreshWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerRefresh(_options?: Configuration): Observable<RefreshResponseType> {
        return this.authControllerRefreshWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RefreshResponseType>) => apiResponse.data));
    }

    /**
     * @param authRegisterLoginDto 
     */
    public authControllerRegisterWithHttpInfo(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerRegister(authRegisterLoginDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerRegisterWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authRegisterLoginDto 
     */
    public authControllerRegister(authRegisterLoginDto: AuthRegisterLoginDto, _options?: Configuration): Observable<void> {
        return this.authControllerRegisterWithHttpInfo(authRegisterLoginDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public authControllerResendVerifyMailWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerResendVerifyMail(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerResendVerifyMailWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerResendVerifyMail(_options?: Configuration): Observable<void> {
        return this.authControllerResendVerifyMailWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authResetPasswordDto 
     */
    public authControllerResetPasswordWithHttpInfo(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerResetPassword(authResetPasswordDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerResetPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authResetPasswordDto 
     */
    public authControllerResetPassword(authResetPasswordDto: AuthResetPasswordDto, _options?: Configuration): Observable<void> {
        return this.authControllerResetPasswordWithHttpInfo(authResetPasswordDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param authUpdateDto 
     */
    public authControllerUpdateWithHttpInfo(authUpdateDto: AuthUpdateDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.authControllerUpdate(authUpdateDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param authUpdateDto 
     */
    public authControllerUpdate(authUpdateDto: AuthUpdateDto, _options?: Configuration): Observable<User> {
        return this.authControllerUpdateWithHttpInfo(authUpdateDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class ObservableCountriesApi {
    private requestFactory: CountriesApiRequestFactory;
    private responseProcessor: CountriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountriesApiResponseProcessor();
    }

    /**
     */
    public countriesControllerFindAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Country>>> {
        const requestContextPromise = this.requestFactory.countriesControllerFindAll(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public countriesControllerFindAll(_options?: Configuration): Observable<Array<Country>> {
        return this.countriesControllerFindAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Country>>) => apiResponse.data));
    }

}

import { FilesApiRequestFactory, FilesApiResponseProcessor} from "../apis/FilesApi";
export class ObservableFilesApi {
    private requestFactory: FilesApiRequestFactory;
    private responseProcessor: FilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FilesApiRequestFactory,
        responseProcessor?: FilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FilesApiResponseProcessor();
    }

    /**
     * @param file 
     */
    public filesLocalControllerUploadFileWithHttpInfo(file?: HttpFile, _options?: Configuration): Observable<HttpInfo<FileType>> {
        const requestContextPromise = this.requestFactory.filesLocalControllerUploadFile(file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filesLocalControllerUploadFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param file 
     */
    public filesLocalControllerUploadFile(file?: HttpFile, _options?: Configuration): Observable<FileType> {
        return this.filesLocalControllerUploadFileWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<FileType>) => apiResponse.data));
    }

}

import { HealthApiRequestFactory, HealthApiResponseProcessor} from "../apis/HealthApi";
export class ObservableHealthApi {
    private requestFactory: HealthApiRequestFactory;
    private responseProcessor: HealthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthApiRequestFactory,
        responseProcessor?: HealthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthApiResponseProcessor();
    }

    /**
     */
    public healthControllerCheckWithHttpInfo(_options?: Configuration): Observable<HttpInfo<HealthControllerCheck200Response>> {
        const requestContextPromise = this.requestFactory.healthControllerCheck(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthControllerCheckWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public healthControllerCheck(_options?: Configuration): Observable<HealthControllerCheck200Response> {
        return this.healthControllerCheckWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<HealthControllerCheck200Response>) => apiResponse.data));
    }

}

import { HomeApiRequestFactory, HomeApiResponseProcessor} from "../apis/HomeApi";
export class ObservableHomeApi {
    private requestFactory: HomeApiRequestFactory;
    private responseProcessor: HomeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HomeApiRequestFactory,
        responseProcessor?: HomeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HomeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HomeApiResponseProcessor();
    }

    /**
     */
    public homeControllerAppInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.homeControllerAppInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.homeControllerAppInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public homeControllerAppInfo(_options?: Configuration): Observable<void> {
        return this.homeControllerAppInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PermitsApiRequestFactory, PermitsApiResponseProcessor} from "../apis/PermitsApi";
export class ObservablePermitsApi {
    private requestFactory: PermitsApiRequestFactory;
    private responseProcessor: PermitsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PermitsApiRequestFactory,
        responseProcessor?: PermitsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PermitsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PermitsApiResponseProcessor();
    }

    /**
     * @param id 
     */
    public permitsControllerPermitWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<FileType>> {
        const requestContextPromise = this.requestFactory.permitsControllerPermit(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.permitsControllerPermitWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public permitsControllerPermit(id: number, _options?: Configuration): Observable<FileType> {
        return this.permitsControllerPermitWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<FileType>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public permitsControllerPermitStatusWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<PermitsControllerPermitStatus200Response>> {
        const requestContextPromise = this.requestFactory.permitsControllerPermitStatus(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.permitsControllerPermitStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public permitsControllerPermitStatus(id: number, _options?: Configuration): Observable<PermitsControllerPermitStatus200Response> {
        return this.permitsControllerPermitStatusWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<PermitsControllerPermitStatus200Response>) => apiResponse.data));
    }

}

import { ProfilesApiRequestFactory, ProfilesApiResponseProcessor} from "../apis/ProfilesApi";
export class ObservableProfilesApi {
    private requestFactory: ProfilesApiRequestFactory;
    private responseProcessor: ProfilesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProfilesApiRequestFactory,
        responseProcessor?: ProfilesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProfilesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProfilesApiResponseProcessor();
    }

    /**
     * @param createCompanyProfileDto 
     */
    public profilesControllerCreateCompanyWithHttpInfo(createCompanyProfileDto: CreateCompanyProfileDto, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.profilesControllerCreateCompany(createCompanyProfileDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.profilesControllerCreateCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createCompanyProfileDto 
     */
    public profilesControllerCreateCompany(createCompanyProfileDto: CreateCompanyProfileDto, _options?: Configuration): Observable<Company> {
        return this.profilesControllerCreateCompanyWithHttpInfo(createCompanyProfileDto, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * @param createIndividualProfileDto 
     */
    public profilesControllerCreateIndividualWithHttpInfo(createIndividualProfileDto: CreateIndividualProfileDto, _options?: Configuration): Observable<HttpInfo<Individual>> {
        const requestContextPromise = this.requestFactory.profilesControllerCreateIndividual(createIndividualProfileDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.profilesControllerCreateIndividualWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createIndividualProfileDto 
     */
    public profilesControllerCreateIndividual(createIndividualProfileDto: CreateIndividualProfileDto, _options?: Configuration): Observable<Individual> {
        return this.profilesControllerCreateIndividualWithHttpInfo(createIndividualProfileDto, _options).pipe(map((apiResponse: HttpInfo<Individual>) => apiResponse.data));
    }

    /**
     * @param updateCompanyProfileDto 
     */
    public profilesControllerUpdateCompanyWithHttpInfo(updateCompanyProfileDto: UpdateCompanyProfileDto, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.profilesControllerUpdateCompany(updateCompanyProfileDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.profilesControllerUpdateCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param updateCompanyProfileDto 
     */
    public profilesControllerUpdateCompany(updateCompanyProfileDto: UpdateCompanyProfileDto, _options?: Configuration): Observable<Company> {
        return this.profilesControllerUpdateCompanyWithHttpInfo(updateCompanyProfileDto, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

    /**
     * @param updateIndividualProfileDto 
     */
    public profilesControllerUpdateIndividualWithHttpInfo(updateIndividualProfileDto: UpdateIndividualProfileDto, _options?: Configuration): Observable<HttpInfo<Individual>> {
        const requestContextPromise = this.requestFactory.profilesControllerUpdateIndividual(updateIndividualProfileDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.profilesControllerUpdateIndividualWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param updateIndividualProfileDto 
     */
    public profilesControllerUpdateIndividual(updateIndividualProfileDto: UpdateIndividualProfileDto, _options?: Configuration): Observable<Individual> {
        return this.profilesControllerUpdateIndividualWithHttpInfo(updateIndividualProfileDto, _options).pipe(map((apiResponse: HttpInfo<Individual>) => apiResponse.data));
    }

}

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class ObservableReportsApi {
    private requestFactory: ReportsApiRequestFactory;
    private responseProcessor: ReportsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportsApiResponseProcessor();
    }

    /**
     * @param year 
     * @param num 
     */
    public reportsControllerReportWithHttpInfo(year: number, num: string, _options?: Configuration): Observable<HttpInfo<FileType>> {
        const requestContextPromise = this.requestFactory.reportsControllerReport(year, num, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportsControllerReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param year 
     * @param num 
     */
    public reportsControllerReport(year: number, num: string, _options?: Configuration): Observable<FileType> {
        return this.reportsControllerReportWithHttpInfo(year, num, _options).pipe(map((apiResponse: HttpInfo<FileType>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * @param id 
     * @param activateUserDto 
     */
    public usersControllerActivateWithHttpInfo(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerActivate(id, activateUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerActivateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param activateUserDto 
     */
    public usersControllerActivate(id: string, activateUserDto: ActivateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerActivateWithHttpInfo(id, activateUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param createUserDto 
     */
    public usersControllerCreateWithHttpInfo(createUserDto: CreateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerCreate(createUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createUserDto 
     */
    public usersControllerCreate(createUserDto: CreateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerCreateWithHttpInfo(createUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param createIndividualUserDto 
     */
    public usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerCreateIndividual(createIndividualUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerCreateIndividualWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createIndividualUserDto 
     */
    public usersControllerCreateIndividual(createIndividualUserDto: CreateIndividualUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerCreateIndividualWithHttpInfo(createIndividualUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     * @param queryUserDto 
     */
    public usersControllerFindAllWithHttpInfo(queryUserDto: QueryUserDto, _options?: Configuration): Observable<HttpInfo<UsersControllerFindAll200Response>> {
        const requestContextPromise = this.requestFactory.usersControllerFindAll(queryUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerFindAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param queryUserDto 
     */
    public usersControllerFindAll(queryUserDto: QueryUserDto, _options?: Configuration): Observable<UsersControllerFindAll200Response> {
        return this.usersControllerFindAllWithHttpInfo(queryUserDto, _options).pipe(map((apiResponse: HttpInfo<UsersControllerFindAll200Response>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public usersControllerFindOneWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerFindOne(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerFindOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public usersControllerFindOne(id: string, _options?: Configuration): Observable<User> {
        return this.usersControllerFindOneWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

    /**
     */
    public usersControllerStatisticsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserStatistics>> {
        const requestContextPromise = this.requestFactory.usersControllerStatistics(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerStatisticsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public usersControllerStatistics(_options?: Configuration): Observable<UserStatistics> {
        return this.usersControllerStatisticsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserStatistics>) => apiResponse.data));
    }

    /**
     * @param id 
     * @param updateUserDto 
     */
    public usersControllerUpdateWithHttpInfo(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<HttpInfo<User>> {
        const requestContextPromise = this.requestFactory.usersControllerUpdate(id, updateUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     * @param updateUserDto 
     */
    public usersControllerUpdate(id: string, updateUserDto: UpdateUserDto, _options?: Configuration): Observable<User> {
        return this.usersControllerUpdateWithHttpInfo(id, updateUserDto, _options).pipe(map((apiResponse: HttpInfo<User>) => apiResponse.data));
    }

}
