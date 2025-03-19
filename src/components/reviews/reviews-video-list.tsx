import { ReviewVideo } from '@/components/reviews/review-video';

export const ReviewsVideoList = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-5">
      <ReviewVideo />
      <ReviewVideo />
      <ReviewVideo />
    </div>
  );
};
