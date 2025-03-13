import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

interface CardPriceProps {
	title: string
	header: string
	price: string
	description: string
	features: string[]
}

export const CardPrice = ({
	title,
	header,
	description,
	features,
	price,
}: CardPriceProps) => {
	const cardClass =
		title === 'Стандарт' ? 'bg-foreground text-background' : 'bg-muted'
	const starIcon =
		title === 'Стандарт' ? '/starIconWhite.svg' : '/starIconBlack.svg'

	return (
		<div
			className={cn(
				'p-10 w-1/3 h-full flex flex-col gap-7.5 rounded-30 min-h-[813px]',
				cardClass
			)}
		>
			<div className='flex gap-5 max-w-[424px] '>
				<p className='text-32 px-5 py-2.5 border rounded-20 '>{title}</p>
				<Image src={starIcon} alt='Звезда' width={56} height={56} />
			</div>
			<div className='flex flex-col gap-5'>
				<h2 className='text-4xl font-montserrat font-bold mb-2 max-w-[424px]'>
					{header}&nbsp;
					<span
						className='text-transparent bg-clip-text text-4xl font-montserrat font-bold'
						style={{
							backgroundImage:
								'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
						}}
					>
						{price}
					</span>
				</h2>
				<p className='text-2xl max-w-[424px]'>{description}</p>
			</div>
			<ul className=' max-w-[424px]'>
				{features.map((feature, index) => (
					<li
						key={index}
						className={cn('flex items-center mb-5', {
							'font-bold': index === 1,
						})}
					>
						<Check className='mr-4' />
						{feature}
					</li>
				))}
			</ul>
			<div className='mt-auto'>
				<Button className='uppercase'>Купить</Button>
			</div>
		</div>
	)
}
