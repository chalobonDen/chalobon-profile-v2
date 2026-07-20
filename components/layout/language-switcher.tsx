'use client';

import { setUserLocale } from '@/actions/locale';
import { Language } from '@/enums/language';
import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const items = [
  { value: Language.EN, label: 'English' },
  { value: Language.TH, label: 'ไทย' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <Select
      items={items}
      value={locale}
      onValueChange={value => setUserLocale(value as Language)}
    >
      <SelectTrigger className='w-32'>
        <SelectValue placeholder='Language' />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {items.map(item => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
