import { StarIcon } from '@/components/ui/star-icon';
import { Title } from '@/components/ui/title';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const Technology = () => {
  return (
    <section className="m-auto mt-10 flex max-w-[1780px] flex-col-reverse items-start gap-5 px-5 md:mt-20 md:flex-row md:gap-15 md:px-0 xl:mt-30">
      <div className="relative px-5 lg:pb-18.25 lg:pl-41">
        <Image
          src="/technology.png"
          alt="Картинка с технологиями"
          width={677}
          height={442}
        />
        <StarIcon
          className={cn('absolute top-1 left-20 h-5 w-5 lg:h-18 lg:w-18')}
        />
        <StarIcon
          className={cn(
            'absolute right-6 bottom-3 h-5 w-5 rotate-45 lg:h-14.25 lg:w-14.25'
          )}
        />
      </div>
      <div className="flex max-w-[730px] flex-col gap-10 pb-5 md:pb-10">
        <div className="flex items-end justify-start gap-5">
          <Title
            title="Технология"
            titleAccent="«Лид Конвейер»"
            className="items-start pb-0"
          />
          <Image
            src="/smiling_face.png"
            alt="Смайлик"
            width={60}
            height={60}
            className="h-8 w-8 md:h-10 md:w-10 xl:h-15 xl:w-15"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="md:text-2xl">
            Мы разработали программный комплекс, который позволяет определять
            контактные данные (телефон, Telegram, email) тех посетителей вашего
            сайта, кто был на сайте, но не оставил заявку.
          </p>
          <p className="md:text-2xl">
            Далее, на основе собственных разработок, мы идентифицируем
            пользователей по интересам и интересующим их товарам и услугам — вам
            передаём только тех, кто заинтересован в вашей услуге или товаре.
          </p>
          <p className="md:text-2xl">
            Вы платите только за результат — за полученных Лидов (заявки) на
            свои услуги или товары.
          </p>
        </div>
      </div>
    </section>
  );
};
