'use server';

import { Language } from '@/enums/language';
import { cookies } from 'next/headers';

export async function setUserLocale(locale: Language) {
  const cookieStore = await cookies();

  cookieStore.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 ปี
  });
}
