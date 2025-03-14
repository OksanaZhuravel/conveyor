import { Answers } from '@/components/answers/answers'
import { Client } from '@/components/client-page/client'
import { MainTabs } from '@/components/content-tabs/main-tabs'
import { Pricing } from '@/components/pricing/pricing'
import { Promo } from '@/components/promo/promo'
import { Reviews } from '@/components/reviews/reviews'

export default function Home() {
	return (
		<div className='w-full font-[family-name:var(--font-inter)] '>
			<main className='w-full h-full m-auto'>
				<Promo />
				<MainTabs />
				<Pricing />
				<Client />
				<Reviews />
				<Answers />
			</main>
		</div>
	)
}
