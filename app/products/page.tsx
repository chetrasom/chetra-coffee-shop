import * as React from "react"
import db from "@/utils/db";
import { fetchAllProducts } from "@/utils/actions";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { ImEqualizer } from "react-icons/im";
import ProductsContainer from "@/components/products/ProductsContainer";
import BorderGradient from "@/components/BorderGradient";
import LayoutToggle from "@/components/products/layout/LayoutToggle";
import Sorting from "@/components/products/sort/Sorting";
import ProductsBanner from "@/components/products/ProductsBanner";
import ProductsPagination from "@/components/products/ProductsPagination";
import FilterGroup from "@/components/products/filters/FilterGroup";
import ResetFilters from "@/components/products/filters/ResetFilters";
import FilterMobile from "@/components/products/filters/FilterMobile";
import { fetchCachedFilters } from "@/utils/cachedFilters";

export const revalidate = 30;
interface ProductsPageProps {
    searchParams: {
        layout?: string,
        search?: string;
        category?: string;
        brand?: string;
        coffeeType?: string;
        sort?: string;
        page?: number;
        limit?: number;
    };
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
    const layout = searchParams.layout || 'grid';
    const search = searchParams.search || '';
    const category = searchParams.category || '';
    const brand = searchParams.brand || '';
    const coffeeType = searchParams.coffeeType || '';
    const sort = searchParams.sort || 'newest';
    // Pagination
    const page = Number(searchParams.page) || 1; 
    const limit = 10;
    
    // # Parallel fetch of filters
    // const [categories, brands, coffeeTypes] = await Promise.all([
    //     db.category.findMany({ select: { name: true, slug: true } }),
    //     db.brand.findMany({ select: { name: true, slug: true } }),
    //     db.coffeeType.findMany({ select: { name: true, slug: true } }),
    // ]);

    // # Update: Fetch cached filters
    const { categories, brands, coffeeTypes } = await fetchCachedFilters();

    // const products = await fetchAllProducts({ search, category, brand, coffeeType, sort });
    const { products, totalPages, currentPage } = await fetchAllProducts({ search, category, brand, coffeeType, sort, page, limit });
    const totalProducts = products.length;

    return (
        <section>
            <ProductsBanner /> 
            <div className="container py-5 flex items-center justify-between">
                {/* Mobile */}
                <div>
                    <div className="md:hidden flex items-center gap-x-2">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="default" size="icon">
                                    <ImEqualizer className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={"left"} className="p-4 h-screen max-h-screen flex flex-col">
                                <SheetHeader>
                                    <SheetTitle className="mt-0 text-xl">
                                        <div className="flex items-center gap-x-2">
                                            <Button variant="ghost" size="icon">
                                                <ImEqualizer className="w-4 h-4" />
                                            </Button>
                                            <h3 className="text-[22px] font-bold">Filters</h3>
                                        </div>
                                    </SheetTitle>
                                    <BorderGradient />
                                    <SheetDescription className="sr-only">
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </SheetDescription>
                                </SheetHeader>

                                <div className="flex-1 overflow-y-auto">
                                    {totalProducts === 0 ? (
                                        <h4 className="text-xl font-bold font-poppins pb-3">
                                            Sorry, no products matched your search...
                                        </h4>
                                    ) : (
                                        <h4 className="text-xl font-bold font-poppins pb-3">
                                            Current: <span className="text-primary">{totalProducts}</span> product{totalProducts > 1 && 's'}
                                        </h4>
                                    )}
                                    <BorderGradient />
                                    <div className="space-y-4 mt-3">
                                        <FilterMobile title="Category" filters={categories} queryKey="category" />
                                        <FilterMobile title="Brand" filters={brands} queryKey="brand" />
                                        <FilterMobile title="Coffee Type" filters={coffeeTypes} queryKey="coffeeType" />
                                        <div className="mt-4">
                                            <ResetFilters />
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* LG */}
                    <div className="hidden md:flex items-center gap-x-2">
                        <Button variant="ghost" size="icon">
                            <ImEqualizer className="w-4 h-4" />
                        </Button>
                        <h3 className="h3 font-bold">Filters</h3>
                    </div>

                </div>

                {/* Desktop */}
                <div className="flex items-center justify-between gap-x-3 px-2 md:gap-x-4 md:basis-2/3 lg:basis-3/4">
                    <div className="hidden md:block">
                        <h3 className="h3 font-body font-bold text-primary">
                            {totalProducts} product{totalProducts > 1 && 's'}
                        </h3>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Sorting />
                        <LayoutToggle />
                    </div>
                </div>

            </div>
            <BorderGradient />
            {/* --------------- Desktop Products Views --------------- */}
            <div className="container py-8 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-2.5 lg:grid-cols-4 lg:gap-5">
                <div className="relative hidden md:block">
                    <div className="sticky top-24 h-fit max-h-[calc(100vh)] overflow-y-auto rounded-xl space-y-5">
                        <FilterGroup title="Category" filters={categories} queryKey="category" />
                        <FilterGroup title="Brand" filters={brands} queryKey="brand" />
                        <FilterGroup title="Coffee Type" filters={coffeeTypes} queryKey="coffeeType" />
                        <ResetFilters />
                    </div>

                    <div className="absolute top-0 right-0 w-px h-full rounded-full bg-gradient-to-b from-secondary via-primary to-secondary"></div>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                    <ProductsContainer products={products} layout={layout} />
                    <ProductsPagination currentPage={currentPage} totalPages={totalPages} />
                </div>
            </div>

        </section>
    )
}
export default ProductsPage;