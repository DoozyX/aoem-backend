import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18nContext } from 'nestjs-i18n';
import path from 'path';

import { AllConfigType } from '@app/config';
import { MailerService } from '@app/mailer';
import { StatusEnum } from '@app/statuses';
import { User } from '@app/users';

import { I18nTranslations, LanguageEnum } from '@app/i18n';
import { MailData } from '../interfaces/mail-data.interface';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService<AllConfigType>,
  ) {}

  private getTemplatePath(template: string): string {
    return path.join(
      this.configService.getOrThrow('app.workingDirectory', {
        infer: true,
      }),
      'src',
      'mail',
      'mail-templates',
      `${template}.hbs`,
    );
  }

  private getAppName(): string {
    return this.configService.get('app.name', { infer: true }) ?? '';
  }

  async userSignUp(mailData: MailData<{ hash: string }>): Promise<void> {
    const i18n = I18nContext.current<I18nTranslations>();
    if (!i18n) {
      this.logger.error('i18n is not available');
      return;
    }

    const [emailConfirmTitle, text1, text2, text3] = await Promise.all<string>([
      i18n.t('common.confirmEmail', { lang: mailData.lang }),
      i18n.t('confirm-email.text1', { lang: mailData.lang }),
      i18n.t('confirm-email.text2', { lang: mailData.lang }),
      i18n.t('confirm-email.text3', { lang: mailData.lang }),
    ]);

    const url = new URL(
      this.configService.getOrThrow('app.frontendDomain', {
        infer: true,
      }) + '/authentication-1/verify-mail',
    );
    url.searchParams.set('hash', mailData.data.hash);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: emailConfirmTitle,
      text: `${url.toString()} ${emailConfirmTitle}`,
      templatePath: this.getTemplatePath('action'),
      context: {
        title: emailConfirmTitle,
        url: url.toString(),
        actionTitle: emailConfirmTitle,
        app_name: this.getAppName(),
        text1,
        text2,
        text3,
        year: new Date().getFullYear(),
      },
    });
  }

  async afterCompleteProfile(mailData: MailData<User>): Promise<void> {
    const i18n = I18nContext.current<I18nTranslations>();
    if (!i18n) {
      this.logger.error('i18n is not available');
      return;
    }

    const [title, subtitle] = await Promise.all<string>([
      i18n.t('profile-completed.title', { lang: mailData.lang }),
      i18n.t('profile-completed.subtitle', { lang: mailData.lang }),
    ]);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: title,
      text: subtitle,
      templatePath: this.getTemplatePath('message'),
      context: {
        title: title,
        app_name: this.getAppName(),
        message: mailData.data.email + ' ' + subtitle,
        year: new Date().getFullYear(),
      },
    });
  }

  async forgotPassword(
    mailData: MailData<{ hash: string; tokenExpires: number }>,
  ): Promise<void> {
    const i18n = I18nContext.current<I18nTranslations>();
    if (!i18n) {
      this.logger.error('i18n is not available');
      return;
    }
    const [resetPasswordTitle, text1, text2, text3] = await Promise.all<string>(
      [
        i18n.t('common.resetPassword', { lang: mailData.lang }),
        i18n.t('reset-password.text1', { lang: mailData.lang }),
        i18n.t('reset-password.text2', { lang: mailData.lang }),
        i18n.t('reset-password.text3', { lang: mailData.lang }),
      ],
    );

    const url = new URL(
      this.configService.getOrThrow('app.frontendDomain', {
        infer: true,
      }) + '/authentication-1/reset-password',
    );
    url.searchParams.set('hash', mailData.data.hash);
    url.searchParams.set('expires', mailData.data.tokenExpires.toString());

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: resetPasswordTitle,
      text: `${url.toString()} ${resetPasswordTitle}`,
      templatePath: this.getTemplatePath('action'),
      context: {
        title: resetPasswordTitle,
        url: url.toString(),
        actionTitle: resetPasswordTitle,
        app_name: this.getAppName(),
        text1,
        text2,
        text3,
        year: new Date().getFullYear(),
      },
    });
  }

  private async getStatusMessage(
    i18n: I18nContext<I18nTranslations>,
    lang: LanguageEnum,
    status: StatusEnum,
    reason: string | null,
  ): Promise<string> {
    switch (status) {
      case StatusEnum.approved:
        return i18n.t('user-status.approved', { lang });
      case StatusEnum.rejected:
        return (await i18n.t('user-status.rejected', { lang })) + reason || '';
      case StatusEnum.verified:
        return (await i18n.t('user-status.verified', { lang })) + reason || '';
      case StatusEnum.pending:
        return i18n.t('user-status.pending', { lang });
      default:
        this.logger.error('Invalid status' + status);
        return '';
    }
  }

  async userStatusUpdated(
    mailData: MailData<{ status: StatusEnum; reason: string | null }>,
  ): Promise<void> {
    const i18n = I18nContext.current<I18nTranslations>();
    if (!i18n) {
      this.logger.error('i18n is not available');
      return;
    }
    const [title, message] = await Promise.all<string>([
      i18n.t('user-status.title', { lang: mailData.lang }),
      this.getStatusMessage(
        i18n,
        mailData.lang,
        mailData.data.status,
        mailData.data.reason,
      ),
    ]);

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: title,
      text: message,
      templatePath: this.getTemplatePath('message'),
      context: {
        title: title,
        message: message,
        app_name: this.getAppName(),
        year: new Date().getFullYear(),
      },
    });
  }
}
