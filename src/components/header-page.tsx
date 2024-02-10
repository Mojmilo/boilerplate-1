import Breadcrumb from "@/components/breadcrumb";

export default function HeaderPage({title}: Readonly<{title: string}>) {
    return (
        <div className={'flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-8 lg:space-y-0 pt-[50px] h-[300px] px-5 xl:px-32 w-full bg-secondary text-secondary-foreground'}>
            <h1 className="text-4xl font-semibold">{title}</h1>
            <Breadcrumb />
        </div>
    )
}