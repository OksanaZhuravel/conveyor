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
    <footer className="font-inter bg-foreground rounded-t-30 text-background flex min-h-[312px] w-full flex-col items-center justify-center gap-5 p-5 xl:py-20">
      <div className="flex flex-wrap justify-center gap-2">
        <p className="xl:text-32 text-sm">
          &copy;&nbsp;2025&nbsp;Все права защищены.
        </p>
        <p className="xl:text-32 text-center text-sm xl:text-left">
          Технология «Лид Конвейер» &mdash;&nbsp;лидогенерация для бизнеса.
        </p>
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-2 md:flex-row">
        <span className="xl:text-32 text-sm">ООО «ДС-ГРУПП»</span>
        <span className="xl:text-32 text-sm">ИНН 7801355174 </span>
        <span className="xl:text-32 text-sm">ОГРН 1187847129425</span>
      </div>
      <LinkFooter links={links} />
    </footer>
  );
};
