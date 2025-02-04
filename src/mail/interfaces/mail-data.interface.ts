import { LanguageEnum } from '@app/i18n';

export interface MailData<T = never> {
  lang: LanguageEnum;
  to: string | string[];
  data: T;
}
