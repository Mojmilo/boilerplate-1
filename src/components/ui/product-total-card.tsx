'use client';

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/maxvzl-ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/maxvzl-ui/textarea";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {ArrowRightCircleIcon} from "lucide-react";
import {orderItems} from "@/data/order-items";
import OrderItem from "@/components/navbar/order/order-item";
import {ScrollArea} from "@/components/ui/scroll-area";

export function ProductTotalCard() {
    return (
        <Card className="sticky top-32 w-full border-none shadow-[0px_0px_8px_-2px_rgba(0,0,0,.1)]">
            <CardHeader className={'flex flex-row justify-between items-center'}>
                <CardTitle className={'text-md'}>Product</CardTitle>
                <span className={'font-semibold'}>Total</span>
            </CardHeader>
            <CardContent className={'space-y-8'}>
                <ScrollArea className="h-[500px] w-full pt-5">
                    <div className="flex flex-col items-center justify-between py-5 px-5 space-y-6">
                        {orderItems.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                    </div>
                </ScrollArea>
                <div className={'flex flex-row justify-between items-center'}>
                    <span className={'text-md font-semibold'}>Subtotal:</span>
                    <div className="flex flex-row justify-center items-center text-sm text-muted-foreground">
                        <span>$</span>
                        <span>100</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between text-xl font-semibold">
                <span>Total:</span>
                <div className="flex flex-row justify-center items-center">
                    <span>$</span>
                    <span>100</span>
                </div>
            </CardFooter>
        </Card>
    )
}
