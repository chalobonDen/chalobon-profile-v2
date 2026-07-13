import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

import en from '@/messages/en.json';
import th from '@/messages/th.json';

const messages = {
  en,
  th,
};

export default getRequestConfig(async () => {
  const cookieStore = await cookies();

  const locale = cookieStore.get('locale')?.value === 'th' ? 'th' : 'en';

  return {
    locale,
    messages: messages[locale],
  };
});
