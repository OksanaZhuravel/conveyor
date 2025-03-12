import { Paths } from '@/constants'

import { LinkFooter } from './link-footer'
const links = [
	{ href: Paths.BLOG, label: 'Блог' },
	{ href: Paths.OFFER, label: 'Договор-оферта' },
	{ href: Paths.PRIVACY_POLICY, label: 'Политика конфиденциальности' },
	{
		href: Paths.DATA_PROCESSING_AGREEMENT,
		label: 'Соглашение об обработке данных',
	},
	{ href: Paths.LOGIN, label: 'Вход в личный кабинет' },
]

export const Footer = () => {
	return (
		<footer className='font-inter bg-foreground rounded-t-4xl text-background  flex w-full items-center justify-center py-20 flex-col gap-5 min-h-[312px]'>
			<div className='flex gap-2 flex-wrap justify-center'>
				<p className='text-[32px]'>&copy;&nbsp;2025&nbsp;Все права защищены.</p>
				<p className='text-[32px]'>
					Технология «Лид Конвейер»&mdash;лидогенерация для бизнеса.
				</p>
			</div>
			<div className='flex gap-2 flex-wrap justify-center'>
				<span className='text-[32px]'>ООО «ДС-ГРУПП»</span>
				<span className='text-[32px]'>ИНН 7801355174 </span>
				<span className='text-[32px]'>ОГРН 1187847129425</span>
			</div>
			<LinkFooter links={links} />
		</footer>
	)
}
