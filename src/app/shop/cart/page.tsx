import HeaderPage from "@/components/header-page";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center px-4 lg:px-8 space-y-20 w-full">
            <HeaderPage title={'Your order.'} />
        </main>
    );
}
