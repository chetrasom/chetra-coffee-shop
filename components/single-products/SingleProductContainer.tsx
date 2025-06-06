import Image from "next/image"
import FavoriteToggleButton from "../products/FavoriteToggleButton";
import ShareButton from "./ShareButton"
// import { Input } from "../ui/input";
import { formatCurrency } from "@/utils/formatCurrency";
// import { Product } from "@prisma/client";
import AddToCart from "./AddToCart";
import ProductRating from "./ProductRating";
// import SelectProductAmount from "./SelectProductAmount";
// import { Button } from "../ui/button";

// type SingleProductContainerProp = {
//     product: Product
// }

type Brand = {
    name: string;
};

type CoffeeType = {
    name: string;
};

type Category = {
    name: string;
};

type ProductWithRelations = {
    id: string;
    name: string;
    price: number;  // price is now a number, not Decimal
    longDesc: string | null;
    imageUrl: string | null;
    size: number[];
    brand: Brand | null;
    coffeeType: CoffeeType | null;
    category: Category | null;
};

type SingleProductContainerProp = {
    product: ProductWithRelations;
};

const SingleProductContainer = ({ product }: SingleProductContainerProp) => {
    const { imageUrl, name, price, longDesc, size } = product;
    const dollarAmount = formatCurrency(price);

    return (
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-x-12">
            <div className="relative border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden grid place-items-center py-5 md:shadow-none">
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
                            className="absolute left-[50%] bottom-[10%] -translate-x-[50%] -z-10 bg-secondary rounded-full w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
                            style={{ clipPath: "inset(50% 0 0 0)" }}
                        ></div>
                    </figure>
                )}
            </div>

            <div>
                {/* Title */}
                <div className="mb-4">
                    <h2 className="font-bold text-primary text-2xl lg:text-3xl">{name}</h2>
                </div>

                {/* Review & Share */}
                <div className="flex items-center justify-between mb-2 lg:justify-start lg:gap-x-6">
                    <ProductRating productId={product.id} />

                    <div className="flex gap-x-2">
                        <FavoriteToggleButton productId={product.id} />
                        <ShareButton name={product.name} productId={product.id} />
                    </div>
                </div>

                <p className='mt-3 text-primary font-open_sans font-bold text-xl bg-muted rounded-md inline-block py-2 px-6'>
                    {dollarAmount}
                </p>

                <p className="text-muted-foreground leading-relaxed py-5 lg:py-7">
                    {longDesc}
                </p>

                <div className="mb-5 lg:mb-7">
                    <h3 className="h3 font-semibold text-lg">Package size and format</h3>
                    <div className='mt-3 text-sm text-muted-foreground tracking-wider bg-muted inline-block py-2 px-4 rounded-md'>
                        {size.length > 0 
                            ? size.map((item, index) => (
                                <span key={item}>
                                    {item} ML{index !== size.length - 1 && ', '}
                                </span>
                            ))
                            : <span>180 ML</span>
                        }
                    </div>
                </div>

                <div>
                    <AddToCart productId={product.id} />
                </div>

            </div>
        </div>
    )
}
export default SingleProductContainer