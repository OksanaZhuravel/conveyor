import { Button } from '@/components/ui/button';
import { Title } from '@/components/ui/title';
import Image from 'next/image';

export const Additionally = () => {
  return (
    <div className="w-full pt-10 md:pt-20 xl:pt-30">
      <Title title="Дополнительные услуги" />
      <div className="flex flex-wrap items-center justify-center gap-5 p-5 pt-5 md:p-0">
        <article className="rounded-30 bg-muted flex h-full min-h-[330px] w-full flex-col justify-between p-10 hover:shadow-lg md:max-w-[550px] 2xl:max-w-[730px]">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-5">
              <p className="font-montserrat max-w-[336px] text-2xl font-bold lg:text-4xl">
                Создание промо-страницы
              </p>
              <p className="font-montserrat text-xl md:text-2xl">
                от
                <span
                  className="font-montserrat ml-3.5 bg-clip-text text-xl font-bold text-transparent md:text-2xl lg:text-4xl"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
                  }}
                >
                  15 000 ₽
                </span>
              </p>
            </div>
            <Image src="/starIcon.svg" alt="Звезда" width={48} height={48} />
          </div>

          <Button className="uppercase">Купить</Button>
        </article>
        <article className="rounded-30 bg-muted flex h-full min-h-[330px] w-full flex-col justify-between p-10 hover:shadow-lg md:max-w-[550px] 2xl:max-w-[730px]">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-5">
              <p className="font-montserrat max-w-[556px] text-2xl font-bold lg:text-4xl">
                Настройка и ведение Яндекс.Директ
              </p>
              <p className="font-montserrat text-xl md:text-2xl">
                от
                <span
                  className="font-montserrat ml-3.5 bg-clip-text text-xl font-bold text-transparent md:text-2xl lg:text-4xl"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
                  }}
                >
                  10 000 ₽
                </span>
              </p>
            </div>
            <Image src="/starIcon.svg" alt="Звезда" width={48} height={48} />
          </div>

          <Button className="uppercase">Купить</Button>
        </article>
      </div>
    </div>
  );
};
