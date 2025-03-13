import { ContentTab } from '@/components/content-tabs/content-tab'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
					<ContentTab
						title='Завалим ваш отдел продаж'
						titleAccent='целевыми Лидами'
					/>
				</TabsContent>
				<TabsContent value='exchange'>
					<ContentTab title='Качественные лиды' />
				</TabsContent>
				<TabsContent value='service'>
					<ContentTab title='Сервис по Лидгену' />
				</TabsContent>
				<TabsContent value='production'>
					<ContentTab title='Лиды для производства' />
				</TabsContent>
				<TabsContent value='business'>
					<ContentTab title='Клиенты для бизнеса' />
				</TabsContent>
				<TabsContent value='phone'>
					<ContentTab title='Определить телефон посетителя сайта' />
				</TabsContent>
			</Tabs>
		</section>
	)
}
