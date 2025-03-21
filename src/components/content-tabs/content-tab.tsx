import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StarIcon } from '@/components/ui/star-icon';
import Image from 'next/image';

const cards = [
  {
    title: 'Оплата за результат',
    description:
      'Вы платите только за переданные и получение вами целевые Лиды — их контактные данные (телефон, Telegram, email)',
    image: '/card/1.png',
    alt: 'Телефон',
  },
  {
    title: 'Качественные лиды',
    description:
      'Все передаваемые вам Лиды — это потенциальные клиенты, которые искали ваш товар или услугу',
    image: '/card/2.png',
    alt: 'Мужчина машет рукой',
  },
  {
    title: 'Любой объём — на ваш выбор',
    description:
      'Покупайте сколько контактов потенциальных клиентов в месяц — сколько требуется вам!',
    image: '/card/3.png',
    alt: 'Корзина со скидками',
  },
  {
    title: 'Комплекс технологий',
    description:
      'После расчёта стоимости Лидов и оплаты выбранного пакета — вы получите уникальный код для своего сайта, который позволит отслеживать контакты тех, кто не оставил заявку',
    image: '/card/4.png',
    alt: 'Ноутбук',
  },
];

export const ContentTab = () => {
  return (
    <div className="grid gap-5 pt-5 md:grid-cols-2">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <span className="lg:text-32">{card.title}</span>
              <StarIcon className="h-11 w-11 rotate-16" />
            </CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent className="self-end">
            <Image
              src={card.image}
              alt={card.alt}
              width={364}
              height={349}
              className="max-w-25 object-contain xl:max-w-50 2xl:max-w-none"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
