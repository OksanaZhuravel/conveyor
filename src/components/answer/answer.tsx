import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Title } from '@/components/ui/title'
import Image from 'next/image'

export const Answer = () => {
	return (
		<section className='w-full m-auto max-w-[1780px] pt-32.5'>
			<div className='flex flex-col items-center pb-15'>
				<Title title='Вопросы и ответы' />
			</div>
			<div className='flex items-start justify-between'>
				<Accordion type='multiple'>
					<AccordionItem value='item-1'>
						<AccordionTrigger className='border-none text-2xl'>
							На сколько это безопасно, законно и может ли навредить моему
							сайту?
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-2xl mt-2'>
								Происходит обработка обезличенных данных (cookies). Cookies -
								маленький фрагмент данных, который сохраняется в браузере и
								передается при обращению к сайтам.
							</p>
							<p className='text-2xl mt-2'>
								Вы можете разместить в политике конфиденциальности условия с
								согласием на передачу и обработку cookies посетителями вашего
								сайта. Таким образом, это гарантирует полную легальность работы
								с данными.
							</p>
							<p className='text-2xl'>
								Для сайта это не может навредить, и санкций со стороны поисковых
								системы (Яндекс, Google) нет.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-2'>
						<AccordionTrigger className='border-none text-2xl'>
							Откуда берутся номера телефонов?
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-2xl'>
								Происходит обработка обезличенных данных (cookies). Cookies -
								маленький фрагмент данных, который сохраняется в браузере и
								передается при обращению к сайтам.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-3'>
						<AccordionTrigger className='border-none text-2xl'>
							Смогу ли я сам установить код на сайт?
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-2xl'>
								Происходит обработка обезличенных данных (cookies). Cookies -
								маленький фрагмент данных, который сохраняется в браузере и
								передается при обращению к сайтам.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-4'>
						<AccordionTrigger className='border-none text-2xl'>
							На какую CMS или конструктор можно установить код «Лид Конвейер»?
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-2xl'>
								Происходит обработка обезличенных данных (cookies). Cookies -
								маленький фрагмент данных, который сохраняется в браузере и
								передается при обращению к сайтам.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='item-5'>
						<AccordionTrigger className='border-none text-2xl'>
							Как оплатить ваш сервис?
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-2xl'>
								Оплата производится на сайте через платежный сервис
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Image
					src='/answer.png'
					alt='Девушка с ноутбуком'
					width={879}
					height={581}
				/>
			</div>
		</section>
	)
}
