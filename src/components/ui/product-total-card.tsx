import * as React from "react"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {orderItems} from "@/data/order-items";
import {ScrollArea} from "@/components/ui/scroll-area";
import CheckoutItem from "@/components/checkout-item";

export function ProductTotalCard() {
    return (
        <Card className="sticky top-32 w-full border-none shadow-[0px_0px_8px_-2px_rgba(0,0,0,.1)]">
            <CardHeader className={'flex flex-row justify-between items-center'}>
                <CardTitle className={'text-md'}>Product</CardTitle>
                <span className={'font-semibold'}>Total</span>
            </CardHeader>
            <CardContent className={'space-y-8'}>
                <ScrollArea className="h-[500px] w-full pt-5">
                    <div className="flex flex-col items-center justify-between py-5 space-y-6">
                        {orderItems.map((item, index) => (
                            <CheckoutItem key={index} item={item} />
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
