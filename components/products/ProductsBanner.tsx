import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import BorderGradient from "../BorderGradient"

const ProductsBanner = () => {
    return (
        <>
            <div className="bg-muted pt-20 pb-12 lg:pt-24">
                <div className="container pt-8">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='capitalize text-base md:text-lg'>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/products" className='capitalize text-base md:text-lg'>
                                    All Products
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h2 className="h2 leading-loose pt-2.5 pb-4 text-primary">
                        Shop Products: All Coffee Formats
                    </h2>
                    <p className="max-w-md">
                        Explore Nescafé&apos;s diverse range of coffee formats, tailored to suit various brewing methods and preferences.
                    </p>
                </div>
            </div>
            <BorderGradient />
        </>
    )
}
export default ProductsBanner