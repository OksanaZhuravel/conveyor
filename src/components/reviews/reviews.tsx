import { ReviewsList } from '@/components/reviews/reviews-list'
import { Title } from '@/components/ui/title'

export const Reviews = () => {
	return (
		<section className='w-full m-auto max-w-[1780px] pt-32.5'>
			<div className='flex flex-col items-center pb-15'>
				<Title title='Отзывы клиентов' />
				<p className='text-32 text-muted-foreground max-w-[791px] text-center'>
					Более 89% наших клиентов сотрудничают с нами ежемесячно на протяжении
					более 2-х лет
				</p>
			</div>
			<ReviewsList />
		</section>
	)
}
