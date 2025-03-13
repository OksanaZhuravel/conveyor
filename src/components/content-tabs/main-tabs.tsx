import { ContentTab } from '@/components/content-tabs/content-tab'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Title } from '../ui/title'

export const MainTabs = () => {
	return (
		<section className='w-full'>
			<Tabs defaultValue='b2b'>
				<TabsList className='h-22 flex gap-5 w-full bg-muted rounded-b-30 px-[70px] '>
					<TabsTrigger value='b2b'>Лидогенерация в b2b</TabsTrigger>
					<TabsTrigger value='exchange'>Биржа лидов</TabsTrigger>
					<TabsTrigger value='service'>Сервис по Лидгену</TabsTrigger>
					<TabsTrigger value='production'>Лиды для производства</TabsTrigger>
					<TabsTrigger value='business' className='flex-col gap-0'>
						Клиенты <span className='text-[20px]'>для бизнеса</span>
					</TabsTrigger>
					<TabsTrigger value='phone'>
						Определить телефон посетителя сайта
					</TabsTrigger>
				</TabsList>
				<TabsContent value='b2b'>
					<Title
						title='Завалим ваш отдел продаж'
						titleAccent='целевыми Лидами'
					/>
					<ContentTab />
				</TabsContent>
				<TabsContent value='exchange'>
					<Title title='Качественные лиды' />
					<ContentTab />
				</TabsContent>
				<TabsContent value='service'>
					<Title title='Сервис по Лидгену' />
					<ContentTab />
				</TabsContent>
				<TabsContent value='production'>
					<Title title='Лиды для производства' />
					<ContentTab />
				</TabsContent>
				<TabsContent value='business'>
					<Title title='Клиенты для бизнеса' />
					<ContentTab />
				</TabsContent>
				<TabsContent value='phone'>
					<Title title='Определить телефон посетителя сайта' />
					<ContentTab />
				</TabsContent>
			</Tabs>
		</section>
	)
}
