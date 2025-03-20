import { Answers } from '@/components/answers/answers';
import { Client } from '@/components/client-page/client';
import { MainTabs } from '@/components/content-tabs/main-tabs';
import { Pricing } from '@/components/pricing/pricing';
import { PromoMain } from '@/components/promo/promo-main';
import { PromoSection } from '@/components/promo/promo-section';
import { Reviews } from '@/components/reviews/reviews';

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-inter)]">
      <main className="m-auto h-full w-full">
        <PromoMain />
        <MainTabs />
        <Pricing />
        <Client />
        <Reviews />
        <PromoSection
          title="Зарегистрируйтесь и добавьте свой проект в систему — начните получать
          Лидов сегодня!"
          src="/promo_2.png"
        />
        <PromoSection
          className="flex-row-reverse"
          title="Давайте принесём результат Вашему бизнесу? Завалите своей отдел продаж Лидами!"
          src="/promo_3.png"
          isReverse
        />
        <Answers />
      </main>
    </div>
  );
}
