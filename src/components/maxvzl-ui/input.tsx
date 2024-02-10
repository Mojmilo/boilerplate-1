'use client';

import * as React from "react"

import { cn } from "@/lib/utils"
import {Label} from "@/components/ui/label";
import {useState} from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
      const [value, setValue] = useState('')

      const placeholder = props.placeholder

      props.placeholder = ''

    return (
        <div className="relative z-0 group">
            <Label htmlFor={props.id} className={`absolute left-0 ${value != '' ? 'top-0 translate-x-0 -translate-y-6 text-xs' : 'top-1/2 translate-x-6 -translate-y-1/2 text-sm group-focus-within:top-0 group-focus-within:-translate-x-0 group-focus-within:-translate-y-6 group-focus-within:text-xs'} duration-300 transition-all text-muted-foreground font-normal`}>{placeholder}</Label>
            <input
                type={type}
                className={cn(
                    "flex px-6 h-14 w-full rounded-md py-2 bg-secondary text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span className={`absolute ${value != '' ? 'w-full' : 'w-0 group-focus-within:w-full'} h-0.5 bg-primary duration-300 transition-all`} />
        </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
