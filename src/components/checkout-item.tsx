'use client';

import {Skeleton} from "@/components/ui/skeleton";
import {useState} from "react";

type OrderItemProps = {
    item: {
        name: string;
    }
}

export default function CheckoutItem({ item }: OrderItemProps) {
    const [items, setItems] = useState(0);

    return (
        <div className={'flex flex-row justify-between items-center w-full'}>
            <Skeleton className="w-28 h-28" />
            <div className="flex flex-col items-start justify-center space-y-2">
                <span className={'text-xs font-medium'}>{item.name}</span>
                <span className={'text-sm font-normal text-muted-foreground'}>x1</span>
            </div>
            <div className="flex flex-row justify-center items-center">
                <span className={'text-xs'}>$</span>
                <span className={'font-semibold'}>100</span>
            </div>
        </div>
    )
}