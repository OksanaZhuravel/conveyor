'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/button'

export const Promo = ({ id }: { id?: string }) => {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive(true)
	}
	return (
		<section
			id={id}
			className='w-full bg-muted flex items-center justify-between gap-32 rounded-b-30 pl-[70px] pr-[130px] px-[60px]'
		>
			<div className='w-full h-full flex flex-col items-start gap-10 max-w-4xl '>
				<h1 className='text-[80px] leading-none font-bold font-montserrat'>
					<span className='text-[80px] font-bold font-montserrat text-accent '>
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
			</div>
		</section>
	)
}
