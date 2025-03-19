import { Paths } from '@/constants';

import { LinkFooter } from './link-footer';
const links = [
  { href: Paths.BLOG, label: 'Блог' },
  { href: Paths.OFFER, label: 'Договор-оферта' },
  { href: Paths.PRIVACY_POLICY, label: 'Политика конфиденциальности' },
  {
    href: Paths.DATA_PROCESSING,
    label: 'Соглашение об обработке данных',
  },
  { href: Paths.LOGIN, label: 'Вход в личный кабинет' },
];

export const Footer = () => {
  return (
    <footer className="font-inter bg-foreground rounded-t-30 text-background flex min-h-[312px] w-full flex-col items-center justify-center gap-5 py-20">
      <div className="flex flex-wrap justify-center gap-2">
        <p className="text-32">&copy;&nbsp;2025&nbsp;Все права защищены.</p>
        <p className="text-32">
          Технология «Лид Конвейер» &mdash;&nbsp;лидогенерация для бизнеса.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <span className="text-32">ООО «ДС-ГРУПП»</span>
        <span className="text-32">ИНН 7801355174 </span>
        <span className="text-32">ОГРН 1187847129425</span>
      </div>
      <LinkFooter links={links} />
    </footer>
  );
};
