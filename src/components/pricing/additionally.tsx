import { Button } from '@/components/ui/button'
import { Title } from '@/components/ui/title'
import Image from 'next/image'

export const Additionally = () => {
	return (
		<div className='pt-33 w-full'>
			<Title title='Дополнительные услуги' />
			<div className='pt-5 flex items-center justify-center gap-5'>
				<article className='flex flex-col justify-between w-full max-w-[730px] h-full min-h-[330px] p-10 rounded-30 bg-muted'>
					<div className='flex justify-between items-start'>
						<div className='flex flex-col gap-5'>
							<p className='text-4xl font-montserrat font-bold max-w-[336px]'>
								Создание промо-страницы
							</p>
							<p className='text-2xl font-montserrat '>
								от
								<span
									className='ml-3.5 text-transparent bg-clip-text text-4xl font-montserrat font-bold'
									style={{
										backgroundImage:
											'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
									}}
								>
									15 000 ₽
								</span>
							</p>
						</div>
						<Image src='/starIcon.svg' alt='Звезда' width={48} height={48} />
					</div>

					<Button className='uppercase'>Купить</Button>
				</article>
				<article className='flex flex-col justify-between w-full max-w-[730px] h-full min-h-[330px] p-10 rounded-30 bg-muted'>
					<div className='flex justify-between items-start'>
						<div className='flex flex-col gap-5 '>
							<p className='text-4xl font-montserrat font-bold max-w-[556px]'>
								Настройка и ведение Яндекс.Директ
							</p>
							<p className='text-2xl font-montserrat '>
								от
								<span
									className='ml-3.5 text-transparent bg-clip-text text-4xl font-montserrat font-bold'
									style={{
										backgroundImage:
											'linear-gradient(90deg, #FF6600 0%, #F26659 27%, #F06177 37%, #E55D97 48%, #CA46D2 71%, #8D13F9 100%)',
									}}
								>
									10 000 ₽
								</span>
							</p>
						</div>
						<Image src='/starIcon.svg' alt='Звезда' width={48} height={48} />
					</div>

					<Button className='uppercase'>Купить</Button>
				</article>
			</div>
		</div>
	)
}
