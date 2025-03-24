import Image from 'next/image';
const orders = [
  {
    id: '01',
    title:
      'Только качественные Лиды. Мы идентифицируем только тех посетителей, которым интересна ваша услуги и из вашего города.',
  },
  {
    id: '02',
    title:
      'Доступная цена и отсутствие минимального порога. У нас отсутствует минимальная плата за сервис, подписка и т.п. Вы покупаете столько Лидов — сколько хотите!',
  },
  {
    id: '03',
    title: 'Техническая поддержка и комплекс услуг. Мы работаем для вас 24/7!',
  },
];
export const OrdersList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 px-2 md:justify-between md:px-0">
      {orders.map((order, index) => (
        <article
          key={index}
          className="rounded-30 bg-muted flex h-full min-h-[330px] w-full max-w-[580px] flex-col justify-start gap-3 p-10 shadow-lg"
        >
          <div className="flex items-start justify-between">
            <p className="font-montserrat text-3xl leading-[80px] font-bold md:text-4xl lg:text-5xl xl:text-[80px]">
              {order.id}
            </p>
            <Image
              src="/starIconBlack.svg"
              alt="Звезда"
              width={60}
              height={60}
            />
          </div>
          <p className="text-xl md:text-2xl">{order.title}</p>
        </article>
      ))}
    </div>
  );
};
