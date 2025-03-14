import Image from 'next/image'

const StarRating = ({ rating }: { rating: number }) => {
	const fullStars = Math.floor(rating)
	// const halfStar = rating % 1 !== 0

	return (
		<div className='flex items-center'>
			{[...Array(fullStars)].map((_, index) => (
				<Image
					key={index}
					src='/star.svg'
					alt='Полная звезда'
					width={49}
					height={49}
					className='fill-gradient'
				/>
			))}
		</div>
	)
}

export default StarRating
