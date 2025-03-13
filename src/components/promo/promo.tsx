'use client'
import { Button } from '@/components/ui/button'
import { StarIcon } from '@/components/ui/star-icon'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

export const Promo = () => {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive(true)
	}
	return (
		<section className='w-full bg-muted gap-32 pl-[70px] py-[60px] pr-[130px]  '>
			<div className='flex items-center justify-between max-w-[1780px] m-auto'>
				<div className='w-full h-full flex flex-col items-start gap-10 max-w-[800px]'>
					<h1 className='text-[80px] leading-none font-bold font-montserrat'>
						<span className='text-[80px] leading-none font-bold font-montserrat text-accent '>
							Лидогенерация
						</span>{' '}
						для&nbsp;бизнеса
					</h1>
					<div className='flex items-center justify-center gap-5 '>
						<p className='max-w-[525px] text-left text-32'>
							Покупайте только целевые лиды по фиксированной цене от 300 ₽
						</p>
						<Image
							src='/money_mouth.png'
							alt='Лицо с денежным ртом'
							width={72}
							height={72}
						/>
					</div>
					<Button
						className={cn('uppercase', { 'bg-active': isActive })}
						onClick={handleClick}
					>
						Выбрать пакет лидов
					</Button>
				</div>
				<div className='relative'>
					<Image
						src='/promo.png'
						alt='Девушка с ноутбуком'
						width={791}
						height={497}
					/>
					<StarIcon className='absolute top-26.5 -right-7.5' />
					<StarIcon className='absolute bottom-19.5 -left-7' />
				</div>
			</div>
		</section>
	)
}
