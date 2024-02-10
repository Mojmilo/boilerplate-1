import {MinusIcon, PlusIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {useState} from "react";

type OrderItemProps = {
    item: {
        name: string;
    }
}

export default function OrderItem({ item }: OrderItemProps) {
    const [items, setItems] = useState(0);

    return (
        <div className={'flex flex-row justify-between items-center w-full'}>
            <Skeleton className="w-28 h-28" />
            <div className="flex flex-col items-start justify-center space-y-2">
                <span className={'text-xs font-medium'}>{item.name}</span>
                <div className="flex flex-row justify-center items-center">
                    <span className={'text-xs'}>$</span>
                    <span className={'font-semibold'}>100</span>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Button variant="default" className="relative w-8 h-8" onClick={() => setItems(items-1)}>
                        <MinusIcon size={20} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </Button>
                    <div className="relative w-10 h-8 bg-secondary text-secondary-foreground">
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-medium">{items}</span>
                    </div>
                    <Button variant="default" className="relative w-8 h-8" onClick={() => setItems(items+1)}>
                        <PlusIcon size={20} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}