import { ReviewsList } from '@/components/reviews/reviews-list';
import { ReviewsVideoList } from '@/components/reviews/reviews-video-list';
import { Title } from '@/components/ui/title';
import { IDs } from '@/constants';

export const Reviews = () => {
  return (
    <section id={IDs.REVIEWS} className="m-auto w-full max-w-[1780px] pt-32.5">
      <div className="flex flex-col items-center pb-15">
        <Title title="Отзывы клиентов" />
        <p className="text-32 text-muted-foreground max-w-[791px] text-center">
          Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении
          более 2-х лет
        </p>
      </div>
      <div className="flex h-full min-h-max flex-col items-start justify-center gap-10 pt-5">
        <ReviewsList />
        <ReviewsVideoList />
      </div>
    </section>
  );
};
