import { Client } from '@/components/client-page/client';
import { MainTabs } from '@/components/content-tabs/main-tabs';
import { Pricing } from '@/components/pricing/pricing';
import { PromoMain } from '@/components/promo/promo-main';
import { PromoSection } from '@/components/promo/promo-section';
import { Reviews } from '@/components/reviews/reviews';
// import { Presentation } from '@/components/technology/presentation';
import { Technology } from '@/components/technology/technology';
import { Works } from '@/components/works/works';
// import { LeadGeneration } from '@/components/generation/lead-generation';
// import { Orders } from '@/components/orders/orders';
// import { Answers } from '@/components/answers/answers';
// import { Contacts } from '@/components/contacts/contacts';

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-inter)]">
      <main className="m-auto h-full w-full">
        <PromoMain />
        <MainTabs />
        <Pricing />
        <Client />
        <Reviews />
        <Technology />
        <PromoSection
          title="Зарегистрируйтесь и добавьте свой проект в систему — начните получать
          Лидов сегодня!"
          src="/promo_2.png"
        />
        <Works />
        {/* <Presentation /> */}
        {/* <Orders /> */}
        <PromoSection
          className="md:flex-row-reverse"
          title="Давайте принесём результат Вашему бизнесу? Завалите своей отдел продаж Лидами!"
          src="/promo_3.png"
          isReverse
        />
        {/* <Answers /> */}
        {/* <LeadGeneration /> */}
        {/* <Contacts /> */}
      </main>
    </div>
  );
}
