'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

function Accordion({
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
	return <AccordionPrimitive.Root data-slot='accordion' {...props} />
}

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item
			data-slot='accordion-item'
			className={cn('border-0 last:border-b-0', className)}
			{...props}
		/>
	)
}

function AccordionTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className='flex'>
			<AccordionPrimitive.Trigger
				data-slot='accordion-trigger'
				className={cn(
					'focus-visible:border-ring border border-transparent hover:border-accent focus-visible:ring-ring/50 flex flex-1 items-start justify-between  py-4 text-left  transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45 [&[data-state=open]]:border-1 [&[data-state=open]]:border-foreground text-2xl gap-15 font-normal  p-10 bg-muted rounded-30',
					// hover:underline rounded-md

					className
				)}
				{...props}
			>
				{children}
				{/* <Minus className='text-foreground pointer-events-none size-11.5 shrink-0' /> */}
				<Plus className='text-foreground pointer-events-none size-11.5 shrink-0 translate-y-0.5 transition-transform duration-500' />
				{/* <ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' /> */}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
}

function AccordionContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	return (
		<AccordionPrimitive.Content
			data-slot='accordion-content'
			className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-2xl'
			{...props}
		>
			<div className={cn('mt-5 bg-muted rounded-30 p-10', className)}>
				{children}
			</div>
		</AccordionPrimitive.Content>
	)
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
