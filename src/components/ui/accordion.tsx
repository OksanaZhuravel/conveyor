'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-0 last:border-b-0', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring hover:border-accent focus-visible:ring-ring/50 [&[data-state=open]]:border-foreground bg-muted rounded-30 flex flex-1 items-center justify-between gap-5 border border-transparent p-3 text-left text-lg font-normal transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 md:gap-10 md:p-5 md:text-2xl lg:gap-15 lg:p-10 [&[data-state=open]]:border-1 [&[data-state=open]>svg]:rotate-45',
          // hover:underline rounded-md

          className
        )}
        {...props}
      >
        {children}
        {/* <Minus className='text-foreground pointer-events-none size-11.5 shrink-0' /> */}
        <Plus className="text-foreground pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-500 md:size-11.5" />
        {/* <ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' /> */}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-2xl"
      {...props}
    >
      <div
        className={cn('bg-muted rounded-30 mt-5 p-3 md:p-5 lg:p-10', className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
