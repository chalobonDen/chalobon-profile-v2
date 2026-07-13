import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import ThemeToggle from '@/components/theme-toggle';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Home');
  return (
    <div className='container'>
      <ThemeToggle />
      <LanguageSwitcher />

      <div>{t('title')}</div>
    </div>
  );
}
