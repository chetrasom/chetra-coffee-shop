import ProductGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { ProductWithRelations } from "@/types";

type ProductsContainerProps = {
    products: ProductWithRelations[],
    layout?: string;
}

const ProductsContainer = ({ products, layout }: ProductsContainerProps) => {
    const totalProducts = products.length;

    return (
        <>
            <div>
                {totalProducts === 0 ? (
                    <h5 className='text-2xl text-center text-orange-500 mt-16'>
                        Sorry, no products matched your search...
                    </h5>
                ): layout === 'grid' ? (
                    <ProductGrid products={products} />
                ) : (
                    <ProductsList products={products} />
                )}
            </div>
        </>
    )
}
export default ProductsContainer