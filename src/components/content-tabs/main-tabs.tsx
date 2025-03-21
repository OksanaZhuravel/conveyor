import { ContentTab } from '@/components/content-tabs/content-tab';
import { Title } from '../ui/title';

export const MainTabs = () => {
  return (
    <section className="m-auto w-full max-w-[1780px] px-2.5 pt-10 lg:pt-32.5">
      {/* <Tabs defaultValue="b2b" className='"w-full'> */}
      {/* <TabsList className="lg:rounded-b-30 ld:px-17.5 flex h-max w-full gap-1 overflow-x-auto rounded-b-md lg:gap-5 lg:px-5 xl:h-22">
          <TabsTrigger value="b2b">Лидогенерация в b2b</TabsTrigger>
          <TabsTrigger value="exchange">Биржа лидов</TabsTrigger>
          <TabsTrigger value="service">Сервис по Лидгену</TabsTrigger>
          <TabsTrigger value="production">Лиды для производства</TabsTrigger>
          <TabsTrigger value="business">Клиенты для бизнеса</TabsTrigger>
          <TabsTrigger value="phone">
            Определить телефон посетителя сайта
          </TabsTrigger>
        </TabsList> */}
      {/* <TabsContent value="b2b"> */}
      <Title title="Завалим ваш отдел продаж" titleAccent="целевыми Лидами" />
      <ContentTab />
      {/* </TabsContent> */}
      {/* <TabsContent value="exchange">
          <Title title="Качественные лиды" />
          <ContentTab />
        </TabsContent>
        <TabsContent value="service">
          <Title title="Сервис по Лидгену" />
          <ContentTab />
        </TabsContent>
        <TabsContent value="production">
          <Title title="Лиды для производства" />
          <ContentTab />
        </TabsContent>
        <TabsContent value="business">
          <Title title="Клиенты для бизнеса" />
          <ContentTab />
        </TabsContent>
        <TabsContent value="phone">
          <Title title="Определить телефон посетителя сайта" />
          <ContentTab />
        </TabsContent> */}
      {/* </Tabs> */}
    </section>
  );
};
