'use client';

import * as React from "react"

import { cn } from "@/lib/utils"
import {Label} from "@/components/ui/label";
import {useState} from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
      const placeholder = props.placeholder

      props.placeholder = ''

      props.value == undefined && (props.value = '')

    return (
        <div className="relative z-0 group">
            <Label htmlFor={props.id} className={`absolute left-0 ${props.value != '' ? 'top-0 translate-x-0 -translate-y-6 text-xs' : 'translate-x-6 translate-y-3 text-sm group-focus-within:top-0 group-focus-within:translate-x-0 group-focus-within:-translate-y-6 group-focus-within:text-xs'} duration-300 transition-all text-muted-foreground font-normal`}>{placeholder}</Label>
            <textarea
                className={cn(
                    "flex min-h-[80px] px-6 h-14 w-full rounded-md bg-secondary py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
            <span className={`absolute ${props.value != '' ? 'w-full' : 'w-0 group-focus-within:w-full'} h-0.5 bg-primary duration-300 transition-all`} />
        </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
