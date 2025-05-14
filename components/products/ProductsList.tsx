import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/utils/formatCurrency";
import { ProductWithRelations } from "@/types";
import FavoriteToggleButton from "./FavoriteToggleButton";
import { FaShoppingCart } from "react-icons/fa";

type ProductsListProp = {
    products: ProductWithRelations[];
}

const ProductsList = ({ products }: ProductsListProp) => {
    return (
        <div className="grid grid-cols-1 gap-y-6">
            {products?.map((product) => {
                const productId = product.id;
                const price = formatCurrency(product.price);

                return (
                    <article key={productId} className="relative bg-background border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden group transform hover:shadow-xl transition-shadow duration-500">
                        <div className="bg-background flex flex-col items-center p-5 md:p-2.5 md:flex-row md:h-[12rem] lg:h-[16.5rem]">
                            
                            <div className="h-full pt-2.5 md:px-2 md:pt-0">
                                {/* Image */}
                                <Link href={`/products/${productId}`}>
                                    <div className="popular-image relative grid place-items-center place-content-center">
                                        <div 
                                            id="shape"
                                            className="popular-shape bg-secondary rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px]"
                                            style={{ clipPath: "inset(50% 0 0 0)" }}
                                        ></div>
                    
                                        {/* <div className="absolute top-0 left-0 md:top-5">
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
                    
                                        {/* <div className="absolute bottom-0 right-0 md:bottom-5 md:right-3 lg:bottom-7">
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
                                </Link>
                            </div>

                            <div className="h-full flex-1 text-center py-5">
                                <Link href={`/products/${productId}`}>
                                    <h4 className="h4 mb-3 px-2 md:px-4 font-poppins font-bold text-primary dark:text-coffee-bright">
                                        {product.name}
                                    </h4>
                                    <p className="line-clamp-2 text-sm p-1 md:line-clamp-3 md:px-2.5 lg:line-clamp-none lg:text-base lg:px-4">{product.longDesc}</p>
                                </Link>
                            </div>

                            <div className="h-full w-full flex items-center justify-between md:flex-col md:items-end md:w-max lg:py-2 lg:pr-2">                                
                                <div className="w-full space-y-2.5 md:order-1 flex items-center justify-between gap-x-4 md:px-3 lg:px-5">
                                    <Button asChild className="btn-cart md:hidden lg:inline-flex">
                                        <Link href={`/products/${productId}`}>
                                            <span className="text-base font-bold font-poppins">Order Now</span>
                                            <span className="text-lg"><FaShoppingCart /></span>
                                        </Link>
                                    </Button>
                                    <span className="text-xl font-poppins font-bold text-primary dark:text-dark-highlight">
                                        {price}
                                    </span>
                                </div>

                                <div className="z-30 absolute top-3 right-3 md:relative">
                                    <FavoriteToggleButton productId={product.id} />
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default ProductsList