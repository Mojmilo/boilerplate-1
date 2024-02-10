import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {ShoppingBasketIcon} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";
import OrderItem from "@/components/navbar/order/order-item";
import {orderItems} from "@/data/order-items";

export function OrderButton() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'secondary'} className={'relative w-14 h-14 rounded-full'}>
                    <span className={'absolute -top-0.5 right-0 rounded-full w-5 h-5 bg-primary text-primary-foreground shadow-sm'}>
                        <span className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium'}>3</span>
                    </span>
                    <ShoppingBasketIcon size={24} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground'} />
                </Button>
            </SheetTrigger>
            <SheetContent className={'p-0'}>
                <div className={'relative h-full'}>
                    <div className="h-full p-6">
                        <SheetHeader>
                            <SheetTitle>Your order</SheetTitle>
                            <SheetDescription>
                                You have {orderItems.length} items in your basket
                            </SheetDescription>
                        </SheetHeader>
                        <ScrollArea className="h-full w-full pt-5">
                            <div className="flex flex-col items-center justify-between pt-5 pb-32 md:px-10 space-y-6">
                                {orderItems.map((item, index) => (
                                    <OrderItem key={index} item={item} />
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                    <SheetFooter className={'absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-70% from-background/95'}>
                        <div className="flex flex-row justify-between items-center w-full space-x-2">
                            <SheetClose asChild className={'w-full'}>
                                <Button variant={'secondary'} type="submit">View order</Button>
                            </SheetClose>
                            <SheetClose asChild className={'w-full'}>
                                <Button type="submit">Checkout</Button>
                            </SheetClose>
                        </div>
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    )
}
