import { Title } from '@/components/ui/title'
import { Additionally } from './additionally'
import { CardPriceList } from './card-price-list'
import { IDs } from '@/constants'

export const Pricing = () => {
	return (
		<section className='w-full m-auto max-w-[1780px] pt-32.5' id={IDs.PRICING}>
			<div className='flex flex-col items-center pb-15'>
				<Title title='Стоимость технологий' titleAccent='«Лид Конвейер»' />
				<p className='text-32 text-muted-foreground max-w-271.5 text-center'>
					Оптимальные тарифы и цены на получение готовых Лидов и заявок с вашего
					сайта, без переплаты и абонентской платы
				</p>
			</div>
			<CardPriceList />
			<Additionally />
		</section>
	)
}
