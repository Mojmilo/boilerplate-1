import * as React from "react"
import {MenuIcon, Minus, Plus} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {navbarItems} from "@/data/navbar-items";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {motion} from "framer-motion";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Switch} from "@/components/ui/switch";
import {useTheme} from "next-themes";

export function BurgerButton() {
    const route = usePathname()
    const baseRoute = '/' + route.split('/')[1]

    const { theme, setTheme } = useTheme()

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost" className={'block lg:hidden hover:bg-background'}>
                    <MenuIcon size={24} />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <ScrollArea className="relative h-[600px] w-full">
                    <Accordion type="single" collapsible className="w-full py-5">
                        {navbarItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                {item.subitems.length > 0 ? (
                                    <AccordionTrigger className={'px-5'}>
                                        <Link key={index} href={item.route}>
                                            <Button variant="link" className={'relative text-foreground hover:text-primary duration-300 transition-colors font-normal'}>
                                                <span className={`absolute top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full ${baseRoute == item.route ? 'opacity-100 w-2 h-2' : 'opacity-0 w-0 h-0'} duration-300 transition-all`}/>
                                                {item.name}
                                            </Button>
                                        </Link>
                                    </AccordionTrigger>
                                ) : (
                                    <Link key={index} href={item.route} className={'px-5'}>
                                        <Button variant="link" className={'relative text-foreground hover:text-primary duration-300 transition-colors font-normal'}>
                                            <span className={`absolute top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full ${baseRoute == item.route ? 'opacity-100 w-2 h-2' : 'opacity-0 w-0 h-0'} duration-300 transition-all`}/>
                                            {item.name}
                                        </Button>
                                    </Link>
                                )}
                                <AccordionContent className={'flex flex-col items-center justify-between space-y-4 pt-6 pb-6 px-5 bg-primary'}>
                                    {item.subitems.map((subitem, index) => (
                                        <Link key={index} href={item.route + subitem.route} className={'w-full'}>
                                            <Button key={index} variant="link" className={'relative text-primary-foreground font-normal w-full'}>
                                            <span className={'absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2'}>
                                                {route == item.route + subitem.route && (
                                                    <motion.span layoutId={'test'} className={`absolute bg-primary-foreground rounded-full w-full h-full`}/>
                                                )}
                                            </span>
                                                {subitem.name}
                                            </Button>
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <Switch id="theme-switch" className={'absolute bottom-O left-1/2 -translate-x-1/2 block lg:hidden'} onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
