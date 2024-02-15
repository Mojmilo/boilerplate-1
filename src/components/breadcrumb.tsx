'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import {Button} from "@/components/maxvzl-ui/button";

export default function Breadcrumb() {
    const route = '/home' + usePathname();
    const routes = route.split('/').filter(Boolean);
    const breadcrumbs = routes.map((route, index) => {
        return {
            name: route.charAt(0).toUpperCase() + route.slice(1),
            path: routes.slice(0, index + 1).join('/').replace('home', '') || '/'
        }
    });

    const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

    return (
        <div className="flex flex-row justify-between items-center space-x-2 px-4 py-2 bg-primary text-secondary-foreground">
            {breadcrumbs.map((breadcrumb, index) => {
                return (
                    <div key={index}>
                        {
                            index !== 0 && (
                                <span className={'text-sm font-medium text-primary-foreground'}>/</span>
                            )
                        }
                        {
                            breadcrumb.name === lastBreadcrumb.name ? (
                                <Button variant="link" size="link" className="text-sm text-primary-foreground hover:-underline hover:text-primary-foreground cursor-not-allowed">
                                    {breadcrumb.name}
                                </Button>
                            ) : (
                                <Link href={breadcrumb.path} key={index}>
                                    <Button variant="link" size="link" className="text-sm text-muted-foreground hover:text-primary-foreground">
                                        {breadcrumb.name}
                                    </Button>
                                </Link>
                            )
                        }
                    </div>
                )
            })}
        </div>
    )
}