import { formatCurrency } from "@/utils/formatCurrency"
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"
import FavoriteToggleButton from "./FavoriteToggleButton"
import { ProductWithRelations } from "@/types";
import { FaHeart, FaShoppingCart } from "react-icons/fa"


const TestProductsGridFour = ({ img }: { img: string }) => {
    return (
        // bg-[#f5d8b7]
        <article className="relative w-[350px] bg-white border border-[#f5d8b7]/50 shadow-lg rounded-lg overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 py-5 md:py-0">
            <Link href={`#`}>
                {/* Image */}
                <div className="popular-image relative grid place-items-center place-content-center py-5">
                    <div 
                        id="shape"
                        className="invisible popular-shape bg-[#bd7a38] rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px]"
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

                    <div className="absolute bottom-0 left-5">
                        <figure className="relative w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]">
                            <Image 
                                src="/img/bean-img.png"
                                alt="coffee"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-cover rotate-[60deg] ease-linear transition-all blur-[2px]"
                            />
                        </figure>
                    </div>

                    <div className="absolute">
                        {/* <figure className="relative w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem]">
                            <Image 
                                src={img}
                                alt="coffee"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-contain"
                            />
                        </figure> */}
                        <figure className="relative w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] 
                        
                        drop-shadow-[7px_16px_32px_#bd7a38]
                        ">
                            {/* drop-shadow-[10px_15px_20px_rgba(78,52,46,0.4)] */}
                            <Image 
                                src={img}
                                alt="coffee"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-contain"
                            />
                        </figure>
                    </div>
                </div>

                {/* Content */}
                <div className="pb-5">
                    <div className="text-center space-y-2.5">
                        <h4 className="h4 mb-6 px-2 md:px-4 font-poppins font-bold text-[#4E342E]">
                            NESCAFÉ Ready to Drink Black Ice with Arabic Added
                        </h4>
                        <div className="flex items-center justify-between px-5">
                            {/* <span className="font-poppins text-xl font-bold text-[#4E342E]">$15</span> */}
                            
                            {/* <Button className="bg-[#bd7a38] rounded-lg h-11 px-6 capitalize">
                                Order Now
                            </Button> */}
                            <Button className="bg-[#bd7a38] rounded-lg h-11 capitalize gap-x-2 font-poppins text-[#fcf3e8]">
                                <span className="text-base font-bold font-poppins">Order Now</span>
                                <span className="text-lg"><FaShoppingCart /></span>
                            </Button>
                            <span className="text-xl font-poppins font-bold text-[#4E342E]">$15</span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Favorite */}
            <div className="absolute top-1 right-1 z-20 md:top-2 md:right-2 lg:top-3 lg:right-3">
                <Button size={"icon"} className="text-lg rounded-full bg-[#bd7a38]">
                    <FaHeart />
                </Button>
            </div>
        </article>
    )
}
export default TestProductsGridFour