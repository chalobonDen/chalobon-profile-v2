'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:scale-105 dark:border-gray-700 dark:bg-slate-900'
      aria-label='Toggle theme'
    >
      {isDark ? (
        <Sun className='h-5 w-5' />
      ) : (
        <Moon className='h-5 w-5 text-white' />
      )}
    </button>
  );
}
