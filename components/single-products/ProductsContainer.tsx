import Image from "next/image"
import { Button } from "../ui/button"
import { BsHeart, BsShare } from "react-icons/bs";
import { RiStarFill } from "react-icons/ri";
import { Input } from "../ui/input";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/formatCurrency";

type ProductsContainerProp = {
    product: Product
}

const ProductsContainer = ({ product }: ProductsContainerProp) => {
    const { imageUrl, name, price } = product;
    const dollarsAmount = formatCurrency(price);

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-x-12">
            <div className="relative rounded-lg border overflow-hidden grid place-items-center">
                {imageUrl && (
                    <figure className="relative rounded-2xl w-full h-[17.5rem] lg:h-[23.75rem]">
                        <Image 
                            src={imageUrl}
                            alt="single-image"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="max-w-full max-h-full object-contain"
                        />
                        <div
                            id="shape"
                            className="absolute left-[50%] bottom-[10%] -translate-x-[50%] -z-10 bg-primary rounded-full w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
                            style={{ clipPath: "inset(50% 0 0 0)" }}
                        ></div>
                    </figure>
                )}
            </div>

            <div>
                {/* Title */}
                <div className="mb-4">
                    <h2 className="font-bold text-primary text-2xl lg:text-3xl">NESCAFÉ Gold Columbia Arabica Blend</h2>
                </div>

                {/* Review & Share */}
                <div className="flex justify-between mb-2 lg:justify-start lg:gap-x-6">
                    <Button variant="secondary" className="flex items-center gap-x-1">
                        4.8 <RiStarFill className="text-amber-400 -mt-0.5" /> (12) Reviews
                    </Button>

                    <div className="flex gap-x-2">
                        <Button size="icon" variant="outline">
                            <BsHeart className="w-5 h-5" />
                        </Button>
                        <Button size="icon" variant="outline">
                            <BsShare className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <p className='mt-3 text-primary font-bold text-xl bg-muted inline-block p-2 rounded-md'>
                    $250.00
                </p>

                <p className="text-muted-foreground leading-relaxed py-5 lg:py-7">
                    NESCAFÉ Espresso Roast Ready to Drink coffee with a perfect blend of Arabica and Robusta coffee beans offers you an intenese and well-rounded taste of coffee with refreshment and convenient for stretching your best in every day.
                </p>

                <div className="mb-5 lg:mb-7">
                    <p className="font-semibold text-lg">Package size and format</p>
                    <div className='mt-3 text-xs text-muted-foreground tracking-wider bg-muted inline-block p-2 rounded-md'>
                        180 ML
                    </div>
                </div>

                {/* Add to cart */}
                <div>
                    <div className="space-y-2 mb-6 max-w-[200px]">
                        <h4 className="h4">Amount:</h4>
                        <Input placeholder="amount" className="h-11" />
                    </div>
                    <Button className="h-11">
                        Sign in
                    </Button>
                </div>

            </div>
        </div>
    )
}
export default ProductsContainer