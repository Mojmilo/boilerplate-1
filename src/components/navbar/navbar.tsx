'use client';

import {NavbarButton} from "@/components/navbar/navbar-button";
import {navbarItems} from "@/data/navbar-items";
import {PlaneIcon, ShoppingBasketIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {OrderButton} from "@/components/navbar/order/order-button";
import {BurgerButton} from "@/components/navbar/burger-button";
import {useTheme} from "next-themes";
import {Switch} from "@/components/ui/switch";

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false)

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
            if (scrollPercent > 0) {
                setIsScrolling(true)
            } else {
                setIsScrolling(false)
            }
        })
    }, [])

    return (
        <div className={`fixed z-50 w-full border-b border-accent px-5 xl:px-40 ${isScrolling ? 'pt-4 pb-6 shadow-sm bg-background/80 backdrop-blur' : 'pt-8 pb-10 shadow-none bg-background'} duration-300 transition-all`}>
            <div className="flex flex-row justify-between items-center w-full">
                <span className={'flex flex-row justify-center items-center space-x-2'}>
                    <PlaneIcon size={34} className={'text-primary'} />
                    <span className={'text-lg font-bold'}>Boilerplate</span>
                </span>
                <div className="hidden lg:flex flex-row justify-between items-center space-x-6">
                    {navbarItems.map((item, index) => (
                        <NavbarButton key={index} item={item} isScrolling={isScrolling} />
                    ))}
                </div>
                <div className="flex flex-row justify-between items-center space-x-4">
                    <Switch id="theme-switch" className={'hidden lg:block'} onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                    <OrderButton />
                    <BurgerButton />
                </div>
            </div>
        </div>
    );
}