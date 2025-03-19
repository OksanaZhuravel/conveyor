import { ReviewsList } from '@/components/reviews/reviews-list';
import { ReviewsVideo } from '@/components/reviews/reviews-video';
import { Title } from '@/components/ui/title';

export const Reviews = () => {
  return (
    <section className="m-auto w-full max-w-[1780px] pt-32.5">
      <div className="flex flex-col items-center pb-15">
        <Title title="Отзывы клиентов" />
        <p className="text-32 text-muted-foreground max-w-[791px] text-center">
          Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении
          более 2-х лет
        </p>
      </div>
      <div className="flex h-max items-start justify-center gap-5 pt-5">
        <ReviewsList />
        <ReviewsVideo />
      </div>
    </section>
  );
};
