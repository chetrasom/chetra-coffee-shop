import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import { ProductWithRelations } from "@/types";

type BestSellerProductProp = {
    product: ProductWithRelations
}

const BestSellerProduct = ({ product }: BestSellerProductProp) => {
    const productId = product.id;
    const price = formatCurrency(product.price);

    return (
        <article key={productId} className="relative bg-muted border rounded-lg overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 py-5 md:py-0 border border-primary/10">
            <Link href={`/products/${productId}`}>
                <div className="popular-image relative grid place-items-center place-content-center py-5">
                    <div 
                        id="shape"
                        className="popular-shape bg-primary rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px]"
                        style={{ clipPath: "inset(50% 0 0 0)" }}
                    ></div>

                    <div className="absolute top-[1.5rem] left-[5rem] md:left-[3rem]">
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
                    </div>

                    <div className="absolute bottom-[2.5rem] right-[5.5rem] md:right-[3rem] lg:bottom-[4rem]">
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
                    </div>

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

                <div>
                    <div className="text-center space-y-2.5 md:pb-5">
                        <h4 className="h4 mb-2 px-2 md:px-4">{product.name}</h4>
                        <Button className="gap-x-1">
                            <span className="hidden lg:inline-block">Order now:</span> {price}
                        </Button>
                    </div>
                </div>
            </Link>
        </article>
    )
}
export default BestSellerProduct