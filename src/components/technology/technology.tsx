import { StarIcon } from '@/components/ui/star-icon';
import { Title } from '@/components/ui/title';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Technology = () => {
  return (
    <section className="m-auto mt-30 flex max-w-[1780px] items-start gap-15">
      <div className="relative pb-18.25 pl-41">
        <Image
          src="/technology.png"
          alt="Картинка с технологиями"
          width={677}
          height={442}
        />
        <StarIcon className={cn('absolute top-1 left-20 h-18 w-18')} />
        <StarIcon
          className={cn('absolute right-6 bottom-3 h-14.25 w-14.25 rotate-45')}
        />
      </div>
      <div className="flex max-w-[730px] flex-col gap-10 pb-10">
        <div className="flex items-end justify-start gap-5">
          <Title
            title="Технология"
            titleAccent="«Лид Конвейер»"
            className="items-start pb-0"
          />
          <Image src="/smiling_face.png" alt="Смайлик" width={60} height={60} />
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-2xl">
            Мы разработали программный комплекс, который позволяет определять
            контактные данные (телефон, Telegram, email) тех посетителей вашего
            сайта, кто был на сайте, но не оставил заявку.
          </p>
          <p className="text-2xl">
            Далее, на основе собственных разработок, мы идентифицируем
            пользователей по интересам и интересующим их товарам и услугам —
            вам передаём только тех, кто заинтересован в вашей услуге
            или товаре.
          </p>
          <p className="text-2xl">
            Вы платите только за результат — за полученных Лидов (заявки)
            на свои услуги или товары.
          </p>
        </div>
      </div>
    </section>
  );
};
