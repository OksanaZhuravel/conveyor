import { ReviewVideo } from '@/components/reviews/review-video';

export const ReviewsVideoList = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-5 md:justify-between">
      <ReviewVideo />
      <ReviewVideo />
      <ReviewVideo />
    </div>
  );
};
