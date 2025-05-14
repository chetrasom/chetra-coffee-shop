import { formatCurrency } from "@/utils/formatCurrency"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import FavoriteToggleButton from "./FavoriteToggleButton"
import { ProductWithRelations } from "@/types";
import { FaShoppingCart } from "react-icons/fa"

type ProductsGridProp = {
    products: ProductWithRelations[];
}

const ProductsGrid = ({ products }: ProductsGridProp) => {
    return (
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-2.5 md:gap-y-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6">
            {products?.map((product) => {
                const productId = product.id;
                const price = formatCurrency(product.price);

                return (
                    <article key={productId} className="relative bg-background border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 py-5 md:pb-3 lg:py-5">
                        <Link href={`/products/${productId}`}>
                            {/* Image */}
                            <div className="popular-image relative grid place-items-center place-content-center py-5">
                                <div 
                                    id="shape"
                                    className="popular-shape bg-secondary rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px]"
                                    style={{ clipPath: "inset(50% 0 0 0)" }}
                                ></div>
            
                                {/* <div className="absolute top-[1.5rem] left-[5rem] md:left-[3rem]">
                                    <figure className="relative w-[25px] h-[25px] lg:w-[32px] lg:h-[32px]">
                                        <Image 
                                            src="/img/bean-img.png"
                                            alt="coffee"
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-full h-full object-cover group-hover:-translate-x-2 group-hover:-translate-y-1 ease-linear transition-all"
                                        />
                                    </figure>
                                </div> */}
            
                                {/* <div className="absolute bottom-[2.5rem] right-[5.5rem] md:right-[3rem] lg:bottom-[4rem]">
                                    <figure className="relative w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]">
                                        <Image 
                                            src="/img/bean-img.png"
                                            alt="coffee"
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-full h-full object-cover rotate-[60deg] group-hover:translate-x-2 group-hover:-translate-y-1 ease-linear transition-all"
                                        />
                                    </figure>
                                </div> */}
            
                                {product?.imageUrl && (
                                    <div className="absolute">
                                        <figure className="relative w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem]">
                                            <Image 
                                                src={product?.imageUrl}
                                                alt="coffee"
                                                fill
                                                priority
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="w-full h-full object-contain"
                                            />
                                        </figure>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div>
                                <div className="text-center space-y-2.5">
                                    <h4 className="h4 mb-6 px-2 md:px-4 font-poppins font-bold text-primary dark:text-coffee-bright">
                                        {product.name}
                                    </h4>
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
                        <div className="absolute top-3 right-3 z-20">
                            <FavoriteToggleButton productId={productId} />
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default ProductsGrid