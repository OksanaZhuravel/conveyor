import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Лидогенерация для бизнеса',
	description: 'Покупайте только целевые лиды',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${inter.variable} ${montserrat.variable} m-auto h-full`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
