'use client';

import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      className={cn(
        'relative flex h-10 w-20 items-center rounded-full p-1 transition',
        dark ? 'bg-slate-700' : 'bg-[#D9F5E6]',
      )}
    >
      <Sun
        className={cn(
          'absolute left-2 h-4 w-4',
          dark ? 'text-gray-400' : 'text-yellow-500',
        )}
      />

      <Moon
        className={cn(
          'absolute right-2 h-4 w-4',
          dark ? 'text-white' : 'text-gray-400',
        )}
      />

      <div
        className={cn(
          'h-8 w-8 rounded-full bg-white shadow transition-all duration-300',
          dark ? 'translate-x-10' : 'translate-x-0',
        )}
      />
    </button>
  );
}
