import { OrdersItems } from '@/components/orders/orders-items';
import { OrdersList } from '@/components/orders/orders-list';
import { Title } from '@/components/ui/title';

export const Orders = () => {
  return (
    <section className="m-auto w-full max-w-[1780px] pt-10 md:pt-20 xl:pt-30">
      <div className="flex flex-col items-center pb-5 md:pb-15">
        <Title title="Почему лучше " titleAccent="заказать Лидов у нас" />
        <p className="lg:text-32 text-muted-foreground max-w-[885px] text-center">
          Лидогенерация — это стабильное получение клиентов и выполнение плана
          по продажам!
        </p>
      </div>
      <OrdersList />
      <OrdersItems />
    </section>
  );
};
