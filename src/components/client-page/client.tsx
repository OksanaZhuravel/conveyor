import { ClientList } from '@/components/client-page/client-list';
import { Title } from '@/components/ui/title';

export const Client = () => {
  return (
    <section className="m-auto w-full max-w-[1780px] px-5 pt-10 md:pt-20 lg:px-0 xl:pt-30">
      <div className="flex flex-col items-center pb-5 md:pb-15">
        <Title
          title="Клиенты, которые уже покупают "
          titleAccent="Лидов для своего бизнеса"
        />
        <p className="lg:text-32 text-muted-foreground max-w-[637px] text-center">
          Более 5000 компаний по всей России уже используют покупку Лидов!
        </p>
      </div>
      <ClientList />
    </section>
  );
};
