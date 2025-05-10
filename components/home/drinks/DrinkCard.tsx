import Link from "next/link"
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { ProductWithRelations } from "@/types";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import { Button } from "@/components/ui/button";

type DrinkCardProp = {
    drink: ProductWithRelations
}

const DrinkCard = ({ drink }: DrinkCardProp) => {
    const price = formatCurrency(drink.price);
    
    return (
        <article className="popular-card relative bg-muted rounded-lg overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 border border-primary/10">
            <Link href={`/products/${drink.id}`}>
                <div className="popular-image relative grid place-items-center place-content-center py-5">
                    <div 
                        id="shape"
                        className="popular-shape bg-primary rounded-full w-[125px] h-[125px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px]"
                        style={{ clipPath: "inset(50% 0 0 0)" }}
                    ></div>

                    <div className="absolute top-5 left-8 md:bottom-8 md:left-12 lg:left-24 xl:left-28">
                        <figure className="relative w-[25px] h-[25px] lg:w-[32px] lg:h-[32px]">
                            <Image 
                                src="/img/ice-img.png"
                                alt="coffee"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-cover group-hover:-translate-x-2 group-hover:-translate-y-1 ease-linear transition-all"
                            />
                        </figure>
                    </div>

                    <div className="absolute top-16 right-7 md:top-24 md:right-14 lg:right-24 lg:bottom-12 xl:right-28">
                        <figure className="relative w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]">
                            <Image 
                                src="/img/ice-img.png"
                                alt="coffee"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-cover rotate-[60deg] group-hover:translate-x-2 group-hover:-translate-y-1 ease-linear transition-all"
                            />
                        </figure>
                    </div>

                    {drink.imageUrl && (
                        <div className="absolute">
                            <figure className="relative w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[14rem] lg:h-[14rem]">
                                <Image 
                                    src={drink?.imageUrl}
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

            <div id="favorite" className="absolute top-1 right-1 md:top-2 md:right-2 lg:top-3 lg:right-3">
                <FavoriteToggleButton productId={drink.id} />
            </div>

            <div className="text-center space-y-2.5 pb-5">
                <h4 className="h4 mb-2 uppercase px-2 md:px-4">{drink.name}</h4>
                {/* <h4 className="font-body text-lg px-2 md:px-4">{price}</h4> */}
                <Button>
                    {price}
                </Button>
            </div>
        </article>
    )
}
export default DrinkCard