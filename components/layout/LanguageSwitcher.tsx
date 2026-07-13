'use client';

import { setUserLocale } from '@/actions/locale';
import { Language } from '@/enums/language';

export default function LanguageSwitcher() {
  return (
    <>
      <button onClick={() => setUserLocale(Language.EN)}>EN</button>

      <button onClick={() => setUserLocale(Language.TH)}>TH</button>
    </>
  );
}
