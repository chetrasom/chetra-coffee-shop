import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { ProductWithRelations } from "@/types";
import { FaShoppingCart } from "react-icons/fa";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";

type BestSellerProductProp = {
    product: ProductWithRelations
}

const BestSellerProduct = ({ product }: BestSellerProductProp) => {
    const productId = product.id;
    const price = formatCurrency(product.price);

    return (
        <article key={productId} className="relative bg-background border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 py-5 md:pb-3 lg:py-5">
            <Link href={`/products/${productId}`}>
                <div className="popular-image relative grid place-items-center place-content-center py-5">
                    <div 
                        id="shape"
                        className="popular-shape bg-secondary rounded-full w-[180px] h-[180px] lg:w-[250px] lg:h-[250px]"
                        style={{ clipPath: "inset(50% 0 0 0)" }}
                    ></div>

                    {product?.imageUrl && (
                        <div className="absolute">
                            <figure className="relative w-[12rem] h-[12rem] lg:w-[14rem] lg:h-[14rem]">
                                <Image 
                                    src={product?.imageUrl}
                                    alt="coffee"
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-contain"
                                />
                            </figure>
                        </div>
                    )}
                </div>

                <div>
                    <div className="text-center space-y-2.5">
                        <div className="h-14 flex flex-col items-center justify-start">
                            <h4 className="product-title">
                                {product.name}
                            </h4>
                        </div>
                        <div className="flex items-center justify-between px-3 lg:px-5">
                            <Button className="btn-cart">
                                <span className="text-base font-bold font-poppins">Order Now</span>
                                <span className="text-lg"><FaShoppingCart /></span>
                            </Button>
                            <span className="text-xl font-poppins font-bold text-primary dark:text-dark-highlight">
                                {price}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Favorite */}
            <div className="absolute top-3 right-3">
                <FavoriteToggleButton productId={productId} />
            </div>
        </article>
    )
}
export default BestSellerProduct