import { Additionally } from '@/components/pricing/additionally';
import { CardPriceList } from '@/components/pricing/card-price-list';
import { Title } from '@/components/ui/title';
import { IDs } from '@/constants';

export const Pricing = () => {
  return (
    <section
      className="m-auto w-full max-w-[1780px] pt-10 md:pt-20 xl:pt-30"
      id={IDs.PRICING}
    >
      <div className="flex flex-col items-center pb-5 md:pb-15">
        <Title title="Стоимость технологий" titleAccent="«Лид Конвейер»" />
        <p className="lg:text-32 text-muted-foreground max-w-271.5 text-center">
          Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего
          сайта, без переплаты и абонентской платы
        </p>
      </div>
      <CardPriceList />
      <Additionally />
    </section>
  );
};
