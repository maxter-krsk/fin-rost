"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import Image from "next/image";
import CircleElement from "@/app/components/ui/CircleElement";

import { cn } from "@/lib/utils";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item data-slot="accordion-item" className={cn(className)} {...props} />
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
          "flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none" +
            "focus-visible:ring-ring/50 focus-visible:border-ring focus-visible:ring-[3px]" +
            "disabled:pointer-events-none disabled:opacity-50",
          "[&[data-state=open]_.faq-close-icon]:rotate-45",
          className
        )}
        {...props}
      >
        {children}
        <CircleElement
          className="flex shrink-0 translate-y-0.5 items-center justify-center w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
          ariaLabel="Элемент Открытия / Закрытия"
        >
          <span className="faq-close-icon inline-flex items-center justify-center transition-transform duration-300">
            <Image
            className="w-20 h-20"
              src="/icons/ui/open-icon.svg"
              alt="Иконка Открытия / Закрытия"
              width={16}
              height={16}
            />
          </span>
        </CircleElement>
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
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
