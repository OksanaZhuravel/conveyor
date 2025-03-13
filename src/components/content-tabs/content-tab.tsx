import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { StarIcon } from '@/components/ui/star-icon'
import Image from 'next/image'

export const ContentTab = () => {
	return (
		<div className='flex pt-5 flex-col items-center gap-10'>
			<div className='grid grid-cols-2 gap-5'>
				<Card>
					<CardHeader>
						<CardTitle>
							<span className='text-32'>Оплата за результат</span>
							<StarIcon className='w-11 h-11 rotate-16' />
						</CardTitle>
						<CardDescription>
							Вы платите только за переданные и получение вами целевые Лиды — их
							контактные данные (телефон, Telegram, email)
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Image src='/card/1.png' alt='Телефон' width={364} height={349} />
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>
							<span className='text-32'>Качественные лиды</span>
							<StarIcon className='w-11 h-11 rotate-16' />
						</CardTitle>
						<CardDescription>
							Все передаваемые вам Лиды — это потенциальные клиенты, которые
							искали ваш товар или услугу
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Image
							src='/card/2.png'
							alt='Мужчина машет рукой'
							width={364}
							height={349}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>
							<span className='text-32'>Любой объём — на ваш выбор</span>
							<StarIcon className='w-11 h-11 rotate-16' />
						</CardTitle>
						<CardDescription>
							Покупайте сколько контактов потенциальных клиентов в месяц
							— сколько требуется вам!
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Image
							src='/card/3.png'
							alt='Корзина со скидками'
							width={364}
							height={349}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>
							<span className='text-32'>Комплекс технологий</span>
							<StarIcon className='w-11 h-11 rotate-16' />
						</CardTitle>
						<CardDescription>
							После расчёта стоимости Лидов и оплаты выбранного пакета —
							вы получите уникальный код для своего сайта, который позволит
							отслеживать контакты тех, кто не оставил заявку
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Image src='/card/4.png' alt='Ноутбук' width={364} height={349} />
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
