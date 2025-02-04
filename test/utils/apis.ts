import {
  AuthApi,
  Configuration,
  createConfiguration,
  FilesApi,
  LoginResponseType,
  server2,
  UsersApi,
} from '@test/api_gen';

import { AuthCredentials } from './constants';

export class Api {
  public auth: AuthApi;
  public files: FilesApi;
  public users: UsersApi;

  public loginUser: LoginResponseType;

  constructor() {
    const config = this.createBaseConfig();
    this.setupApis(config);
  }

  static async withLogin(auth: AuthCredentials): Promise<Api> {
    const api = new Api();
    await api.login(auth);
    return api;
  }

  static withToken(token: string): Api {
    const api = new Api();
    const authConfig = api.getBearerConfig(token);
    api.setupApis(authConfig);
    return api;
  }

  public async login({ email, password }: AuthCredentials): Promise<void> {
    const authRes = await this.auth.authControllerLogin({ email, password });
    this.loginUser = authRes;

    const authConfig = this.getBearerConfig(authRes.token);

    await this.setupApis(authConfig);
  }

  private setupApis(authConfig: Configuration): void {
    this.files = new FilesApi(authConfig);
    this.users = new UsersApi(authConfig);
    this.auth = new AuthApi(authConfig);
  }

  public getBearerConfig(token: string): Configuration {
    return createConfiguration({
      baseServer: server2,
      middleware: [],
      authMethods: {
        bearer: { tokenProvider: { getToken: () => token } },
      },
    });
  }

  private createBaseConfig(): Configuration {
    return createConfiguration({
      baseServer: server2,
      middleware: [],
      authMethods: {},
    });
  }
}
