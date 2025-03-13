import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card'
			className={cn(
				'bg-card flex flex-row gap-2.5 rounded-30 min-h-87 shadow-sm',
				className
			)}
			{...props}
		/>
	)
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-header'
			className={cn(
				'pl-10 pt-15 flex flex-col gap-5 max-w-[456px] ',
				className
			)}
			{...props}
		/>
	)
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-title'
			className={cn('leading-none text-foreground', className)}
			{...props}
		/>
	)
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-description'
			className={cn('text-card-foreground text-2xl', className)}
			{...props}
		/>
	)
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot='card-content' className={cn('', className)} {...props} />
	)
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot='card-footer'
			className={cn('flex items-center px-6', className)}
			{...props}
		/>
	)
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
