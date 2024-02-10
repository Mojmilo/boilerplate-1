import Breadcrumb from "@/components/breadcrumb";
import {BillingDetailsCard} from "@/components/billing-details-card";
import {ProductTotalCard} from "@/components/ui/product-total-card";
import HeaderPage from "@/components/header-page";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 lg:px-8 space-y-20 w-full">
            <HeaderPage title={'Checkout'} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <div className={'col-span-2'}>
                    <BillingDetailsCard />
                </div>
                <div>
                    <ProductTotalCard />
                </div>
            </div>
        </main>
    );
}
