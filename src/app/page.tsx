import { MainTabs } from '@/components/content-tabs/main-tabs'
import { Promo } from '@/components/promo/promo'

export default function Home() {
	return (
		<div className='w-full font-[family-name:var(--font-inter)] '>
			<main className='w-full h-full m-auto'>
				<Promo />
				<MainTabs />
			</main>
		</div>
	)
}
