'use client';

import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {NavbarItem} from "@/data/navbar-items";
import { motion } from "framer-motion";

export function NavbarButton({item, isScrolling}: {item: NavbarItem, isScrolling: boolean}) {
    const route = usePathname()
    const baseRoute = '/' + route.split('/')[1]

    return (
        item.subitems.length > 0 ? (
            <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger asChild>
                    <Link href={item.route}>
                        <Button variant="link" className={'relative text-foreground hover:text-primary duration-300 transition-colors font-normal'}>
                            <span className={`absolute top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full ${baseRoute == item.route ? 'opacity-100 w-2 h-2' : 'opacity-0 w-0 h-0'} duration-300 transition-all`}/>
                            {item.name}
                        </Button>
                    </Link>
                </HoverCardTrigger>
                <HoverCardContent sideOffset={isScrolling ? 20 : 35} className={`w-auto ${isScrolling ? 'shadow-sm' : 'shadow-none'} border-accent data-[state=open]:slide-in-from-bottom-6 data-[state=closed]:slide-out-to-bottom-6`}>
                    <div className={`grid ${item.subitems.length > 4 && 'grid-rows-4 grid-flow-col-dense'} gap-4`}>
                        {item.subitems.map((subitem, index) => (
                            <Link key={index} href={item.route + subitem.route}>
                                <Button key={index} variant="link" className={'relative text-foreground hover:text-primary duration-300 transition-colors font-normal'}>
                                    <span className={'absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2'}>
                                        {route == item.route + subitem.route && (
                                            <motion.span layoutId={'test'} className={`absolute bg-primary rounded-full w-full h-full`}/>
                                        )}
                                    </span>
                                    {subitem.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </HoverCardContent>
            </HoverCard>
        ) : (
            <Link href={item.route}>
                <Button variant="link" className={'relative text-foreground hover:text-primary duration-300 transition-colors font-normal'}>
                    <span className={`absolute top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full ${baseRoute == item.route ? 'opacity-100 w-2 h-2' : 'opacity-0 w-0 h-0'} duration-300 transition-all`}/>
                    {item.name}
                </Button>
            </Link>
        )
    )
}
