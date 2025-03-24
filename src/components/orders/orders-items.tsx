import Image from 'next/image';
const orders = [
  {
    id: '1',
    srs: '/orders/01.png',
    title: 'Источник Лидов:',
    description:
      'контекстная реклама в Яндекс.Директ, SEO, SMM и другая реклама дополняют технологию «Лид Конвейер».',
  },
  {
    id: '2',
    srs: '/orders/02.png',
    title: 'Вы экономите на рекламе:',
    description:
      'получая контактные данных тех, кто не оставил заявки, но заинтересован в Вашем товаре или услуге — это дополнительный канал продаж.',
  },
  {
    id: '3',
    srs: '/orders/03.png',
    title: 'Вы сможете прогнозировать продажи:',
    description:
      'чтобы не ждать, когда-же кто‑то позвонит или оставит заявку, звоните и продавайте первым!',
  },
  {
    id: '4',
    srs: '/orders/04.png',
    title: 'Безопасно:',
    description: 'это абсолютно легальный и законный метод получения Лидов.',
  },
  {
    id: '5',
    srs: '/orders/05.png',
    title: 'Быстро:',
    description:
      'запуск и получение первых Лидов обычно занимает 5–7 дней, а добавление проекта в систему менее 1 часа.',
  },
];
export const OrdersItems = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-2 pt-5 md:px-0">
      {orders.map((order) => (
        <article
          key={order.id}
          className="rounded-30 bg-muted flex h-full w-full flex-col justify-start gap-5 p-7.5 shadow-lg md:min-h-[455px] md:max-w-[340px]"
        >
          <Image src={order.srs} alt={order.title} width={50} height={50} />
          <p className="text-muted-foreground flex flex-col text-xl font-normal md:text-2xl">
            <span className="text-xl font-bold md:text-2xl">{order.title}</span>
            {order.description}
          </p>
        </article>
      ))}
    </div>
  );
};
