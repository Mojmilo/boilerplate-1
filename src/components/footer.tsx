'use client';

import {NavbarButton} from "@/components/navbar/navbar-button";
import {navbarItems} from "@/data/navbar-items";
import {FacebookIcon, InstagramIcon, PlaneIcon, ShoppingBasketIcon, TwitterIcon, YoutubeIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {OrderButton} from "@/components/navbar/order/order-button";
import {BurgerButton} from "@/components/navbar/burger-button";
import {useTheme} from "next-themes";
import {Switch} from "@/components/ui/switch";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={`w-full border-t-2 border-accent px-5 xl:px-40 pt-4 pb-6 bg-background`}>
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 w-full">
                <span className={'flex flex-row justify-center items-center space-x-2'}>
                    <PlaneIcon size={34} className={'text-primary'} />
                    <span className={'text-lg font-bold'}>Boilerplate</span>
                </span>
                <div className="flex flex-row justify-between items-center">
                    <Link href={'#'}>
                        <Button variant={'link'}>
                            <TwitterIcon size={20} />
                        </Button>
                    </Link>
                    <Link href={'#'}>
                        <Button variant={'link'}>
                            <InstagramIcon size={20} />
                        </Button>
                    </Link>
                    <Link href={'#'}>
                        <Button variant={'link'}>
                            <FacebookIcon size={20} />
                        </Button>
                    </Link>
                    <Link href={'#'}>
                        <Button variant={'link'}>
                            <YoutubeIcon size={20} />
                        </Button>
                    </Link>
                </div>
                <span className={'text-xs text-muted-foreground'}>© 2024 Boilerplate. All rights reserved.</span>
            </div>
        </div>
    );
}