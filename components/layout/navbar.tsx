import Link from 'next/link';

import { NavMenu } from './nav-menu';
import { MobileMenu } from './mobile-menu';
import ThemeSwitcher from '../theme-switcher';
import LanguageSwitcher from './language-switcher';

export function Navbar() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-xl'>
      <div className='container flex h-16 items-center justify-between'>
        <Link href='/' className='text-xl font-bold tracking-wide'>
          Chalobon
        </Link>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center gap-8'>
          <NavMenu />
          <div className='flex items-center gap-2'>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile menu */}
        <div className='md:hidden'>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
