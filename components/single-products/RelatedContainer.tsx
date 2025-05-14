"use client";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import '../single-products/swiperRelatedStyle.css';
import BorderGradient from "../BorderGradient";
import Link from "next/link";
import { Button } from "../ui/button";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaShoppingCart } from "react-icons/fa";

type RelatedContainerProp = {
    relatedProducts: Product[]
}

const RelatedContainer = ({ relatedProducts }: RelatedContainerProp) => {
    return (
        <section className="py-16">
            <div className="">

                {relatedProducts.length > 0 && (
                    <div className="mb-6 lg:mb-10">
                        <h3 className="font-poppins capitalize font-bold text-2xl text-primary pb-2">
                            You may also like
                        </h3>
                        <BorderGradient />
                    </div>
                )}

                <Swiper
                    id="related_products"
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((product) => {
                            const { name, price, id } = product;
                            const dollarAmount = formatCurrency(price);

                            return (
                                <SwiperSlide key={product.id}>
                                    <article className="relative bg-background border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 py-5 md:pb-3 lg:py-5">
                                        <Link href={`/products/${product.id}`}>
                                            {/* Image */}
                                            <div className="relative grid place-items-center place-content-center w-[15rem] h-[15rem] mx-auto">
                                                <div 
                                                    id="shape"
                                                    className="popular-shape bg-secondary rounded-full w-[150px] h-[150px] md:w-[175px] md:h-[175px] lg:w-[250px] lg:h-[250px]"
                                                    style={{ clipPath: "inset(50% 0 0 0)" }}
                                                ></div>

                                                {/* <div className="absolute top-[2.5rem] left-[2.5rem] md:left-[3rem] lg:left-[1.5rem]">
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

                                                {/* <div className="absolute bottom-[4rem] right-[4rem] md:right-[3rem] lg:bottom-[4rem] lg:right-[2.5rem]">
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

                                                <div className="absolute">
                                                    {product.imageUrl && (
                                                        <figure className="relative w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem]">
                                                            <Image 
                                                                src={product.imageUrl}
                                                                alt="coffee"
                                                                fill
                                                                priority
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </figure>
                                                    )}
                                                </div>
                                                
                                            </div>

                                            <div>
                                                <div className="text-center space-y-2.5">
                                                    <h4 className="h4 mb-6 px-2 md:px-2 font-poppins font-bold text-primary dark:text-coffee-bright lg:mt-4">
                                                        {name}
                                                    </h4>
                                                    <div className="flex items-center justify-between px-3 lg:px-5">
                                                        <Button className="btn-cart">
                                                            <span className="text-base font-bold font-poppins">Order Now</span>
                                                            <span className="text-lg"><FaShoppingCart /></span>
                                                        </Button>
                                                        <span className="text-xl font-poppins font-bold text-primary dark:text-dark-highlight">
                                                            {dollarAmount}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Favorite */}
                                        {/* <div className="absolute top-3 right-3">
                                            <FavoriteToggleButton productId={id} />
                                        </div> */}
                                    </article>
                                </SwiperSlide>
                            )
                        })
                    ) : (
                        <h3></h3>
                    )}
                </Swiper>
            </div>
        </section>
    )
}
export default RelatedContainer