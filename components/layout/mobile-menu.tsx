'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

import { menus } from '@/constants/menus';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import LanguageSwitcher from './language-switcher';
import ThemeSwitcher from '../theme-switcher';

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            aria-label='Open menu'
          >
            <Menu className='h-5 w-5' />
          </Button>
        }
      />

      <SheetContent side='right' className='w-[280px] sm:w-[320px]'>
        <SheetHeader>
          <SheetTitle className='text-left text-lg font-bold'>
            Chalobon
          </SheetTitle>
        </SheetHeader>

        <nav className='mt-8 flex flex-col gap-2'>
          {menus.map(menu => (
            <Link
              key={menu.href}
              href={menu.href}
              onClick={() => setOpen(false)}
              className='rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
            >
              {menu.key}
            </Link>
          ))}
        </nav>

        <div className='mt-8 border-t pt-6'>
          <div className='flex items-center justify-between gap-3'>
            <div className='flex-1'>
              <LanguageSwitcher />
            </div>
            <div>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
