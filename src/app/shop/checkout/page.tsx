import {ChekoutDetailsCard} from "@/components/chekout-details-card";
import {ProductTotalCard} from "@/components/ui/product-total-card";
import HeaderPage from "@/components/header-page";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 lg:px-8 space-y-20 w-full">
            <HeaderPage title={'Checkout'} />
            <div className="flex flex-col-reverse lg:grid grid-cols-3 gap-8 w-full">
                <div className={'col-span-2'}>
                    <ChekoutDetailsCard />
                </div>
                <div>
                    <ProductTotalCard />
                </div>
            </div>
        </main>
    );
}
