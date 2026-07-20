import { menus } from '@/constants/menus';
import Link from 'next/link';

export function NavMenu() {
  return (
    <nav className='hidden items-center gap-8 md:flex'>
      {menus.map(menu => (
        <Link
          key={menu.href}
          href={menu.href}
          className='text-sm font-medium transition-colors hover:text-primary'
        >
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}
