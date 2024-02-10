export type NavbarItem = {
    name: string;
    route: string;
    subitems: NavbarSubItem[];
}

export type NavbarSubItem = {
    name: string;
    route: string;
}

export const navbarItems : NavbarItem[] = [
    {
        name: "Home",
        route: "/",
        subitems: []
    },
    {
        name: "Pages",
        route: "/pages",
        subitems: [
            {name: "About 1", route: "/about-1"},
            {name: "About 2", route: "/about-2"},
            {name: "Gallery 1", route: "/gallery-1"},
            {name: "Gallery 2", route: "/gallery-2"},
            {name: "Reviews", route: "/reviews"},
            {name: "Reservation", route: "/reservation"},
            {name: "FAQ", route: "/faq"},
            {name: "404", route: "/404"},
        ]
    },
    {
        name: "Menu",
        route: "/menu",
        subitems: [
            {name: "Menu 1", route: "/menu-1"},
            {name: "Menu 2", route: "/menu-2"},
            {name: "Menu 3", route: "/menu-3"},
            {name: "Menu 4", route: "/menu-4"},
            {name: "Menu 5", route: "/menu-5"},
            {name: "Menu 6", route: "/menu-6"},
        ]
    },
    {
        name: "Blog",
        route: "/blog",
        subitems: [
            {name: "Blog", route: "/blog"},
            {name: "Blog list", route: "/blog-list"},
            {name: "Blog list 2", route: "/blog-list-2"},
            {name: "Publication", route: "/publication"},
            {name: "Publication 2", route: "/publication-2"},
            {name: "Publication 3", route: "/publication-3"},
        ]
    },
    {
        name: "Shop",
        route: "/shop",
        subitems: [
            {name: "Shop", route: "/shop"},
            {name: "Shop 2", route: "/shop-2"},
            {name: "Products", route: "/products"},
            {name: "Products 2", route: "/products-2"},
            {name: "Product page", route: "/product-page"},
            {name: "Cart", route: "/cart"},
            {name: "Checkout", route: "/checkout"},
        ]
    },
    {
        name: "Contact",
        route: "/contact",
        subitems: []
    }
]