import { ReviewsList } from '@/components/reviews/reviews-list';

import { Title } from '@/components/ui/title';
import { IDs } from '@/constants';

export const Reviews = () => {
  return (
    <section
      id={IDs.REVIEWS}
      className="m-auto w-full max-w-[1780px] px-5 pt-10 md:pt-20 lg:px-0 xl:pt-30"
    >
      <div className="flex flex-col items-center pb-5 md:pb-15">
        <Title title="Отзывы клиентов" />
        <p className="lg:text-32 text-muted-foreground max-w-[791px] text-center">
          Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении
          более 2-х лет
        </p>
      </div>

      <div className="flex h-full flex-col items-start justify-center gap-5 px-1 pt-5 md:px-0 lg:gap-10">
        <ReviewsList />
      </div>
    </section>
  );
};
