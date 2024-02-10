'use client';

import {NavbarButton} from "@/components/navbar/navbar-button";
import {navbarItems} from "@/data/navbar-items";
import {PlaneIcon, ShoppingBasketIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {OrderButton} from "@/components/navbar/order/order-button";
import {BurgerButton} from "@/components/navbar/burger-button";

export default function Navbar() {
    const [isScrolling, setIsScrolling] = useState(false)

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
        <div className={`fixed w-full border-b border-accent bg-background px-5 xl:px-40 ${isScrolling ? 'pt-4 pb-6 shadow-sm' : 'pt-8 pb-10 shadow-none'} duration-300 transition-all`}>
            <div className="flex flex-row justify-between items-center w-full">
                <span className={'flex flex-row justify-center items-center space-x-2'}>
                    <PlaneIcon size={34} className={'text-primary'} />
                    <span className={'text-lg font-bold'}>Boilerplate</span>
                </span>
                <div className="hidden md:flex flex-row justify-between items-center space-x-6">
                    {navbarItems.map((item, index) => (
                        <NavbarButton key={index} item={item} isScrolling={isScrolling} />
                    ))}
                </div>
                <div className="flex flex-row justify-between items-center space-x-4">
                    <OrderButton />
                    <BurgerButton />
                </div>
            </div>
        </div>
    );
}