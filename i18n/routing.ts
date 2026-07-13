import { defineRouting } from 'next-intl/routing';
import { Language } from '@/enums/language';

export const routing = defineRouting({
  locales: [Language.EN, Language.TH],
  defaultLocale: Language.TH,
  localePrefix: 'never',
});
