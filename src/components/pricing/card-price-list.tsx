import { CardPrice } from '@/components/pricing/card-price';
const pricingData = [
  {
    title: 'Старт',
    header: '50 готовых лидов за',
    price: '22 500 ₽',
    description:
      'Стартовый пакет для тех, кто хочет купить Лидов со своего сайта и повысить свои продаж',
    features: ['50 Лидов', '450 ₽ за один Лид', 'Получение за 5–7 дней'],
  },
  {
    title: 'Стандарт',
    header: '100 готовых лидов за ',
    price: '40 000 ₽',
    description:
      'Оптимальный пакет Лидов для любого отдела продаж и для повышения продаж своих товаров или услуг',
    features: [
      '100 Лидов',
      '400 ₽ за один Лид',
      'Получение за 7–14 дней',
      'Возможность показа Лидам рекламы через Яндекс.Директ',
    ],
  },
  {
    title: 'Премиум',
    header: '300 готовых лидов за',
    price: '90 000 ₽',
    description:
      'Максимум целевых Лидов в ближайшее время для вашего бизнеса которые уже завтра могут стать Вашими клиентами!',
    features: [
      '300 Лидов',
      '300 ₽ за один Лид',
      'Получение за 14–30 дней',
      'Возможность показа Лидам рекламы через Яндекс.Директ',
      'Готовый и конверсионный скрипт продаж целевым Лидам',
    ],
  },
];
export const CardPriceList = () => {
  return (
    <div className="flex items-start justify-between gap-5">
      {pricingData.map((data, index) => (
        <CardPrice
          key={index}
          title={data.title}
          header={data.header}
          price={data.price}
          description={data.description}
          features={data.features}
        />
      ))}
    </div>
  );
};
