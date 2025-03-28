import StarRating from '@/components/reviews/star-rating';

const reviews = [
  {
    rating: 2.0,
    text: '«Стабильно получаем новые лиды из сервиса. С точки зрения рентабельности нареканий нет. Тёплая заявка 800–1000 рублей, конверсия, цена-качество устраивает. Общее впечатление достаточно хорошее, цена, качество, скорость».',
    niche: 'Ниша: банкротство, списание долгов',
  },
  {
    rating: 4.0,
    text: '«С вашим сервисом работаем с июня 22 года. Нас заинтересовало, и мы решили протестировать. Взяли минимальный пакет из 10 новых лидов, а потом, как он закончился, взяли повышенный пакет. Учитывая нашу сферу и посмотреть статистику, из 100 заинтересованных 15 в продажу. Это хороший результат». ',
    niche: 'Ниша: банкротство, списание долгов',
  },
  {
    rating: 5.0,
    text: '«С сервисом работаем чуть меньше года. Немного сомневались, но согласились попробовать, а после продолжили работать. Новые клиенты появились сразу, передали на наш колл-центр. С вашего источника дешевле, чем с других сервисов. Безусловно, с вами стоит работать».',
    niche: 'Ниша: банкротство, списание долгов',
  },
  {
    rating: 3.0,
    text: '«С вашей компанией работаем более 2‑х лет, сотрудничество полезное. Мы все посмотрели, разобрались, что сервис даёт реально целевые заявки. Заключили контракт на 23 000 рублей, окупилось. Понравилась технология, она помогает нам получать лиды».',
    niche: 'Ниша: банкротство, списание долгов',
  },
];

export const ReviewsList = () => {
  return (
    <div className="w-full lg:overflow-x-auto">
      <div className="flex h-full min-h-max w-full flex-wrap items-start justify-between gap-5 lg:flex-nowrap 2xl:px-0">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="rounded-30 bg-muted flex h-full w-[280px] grow flex-col gap-5 p-5 md:w-[430px] md:min-w-[430px] md:p-10 lg:min-h-[680px]"
          >
            <div className="flex items-start justify-between">
              <p className="font-montserrat text-2xl font-bold lg:text-4xl">
                {review.rating.toFixed(1)}
              </p>
              <StarRating rating={review.rating} />
            </div>
            <div className="flex flex-col gap-5">
              <p className="lg:text-2xl">{review.text}</p>
              <p className="text-muted-foreground lg:text-2xl">
                {review.niche}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
