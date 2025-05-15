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
                    <div className="mb-6 lg:mb-8">
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
                                <SwiperSlide key={product.id} className="py-5">
                                    <article className="relative bg-background border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden group transform hover:shadow-xl transition-shadow duration-500 py-5 md:pb-3 lg:py-5">
                                        <Link href={`/products/${product.id}`}>
                                            {/* Image */}
                                            <div className="relative grid place-items-center place-content-center w-[15rem] h-[15rem] mx-auto">
                                                <div 
                                                    id="shape"
                                                    className="popular-shape bg-secondary rounded-full w-[180px] h-[180px] lg:w-[225px] lg:h-[225px]"
                                                    style={{ clipPath: "inset(50% 0 0 0)" }}
                                                ></div>

                                                <div className="absolute">
                                                    {product.imageUrl && (
                                                        <figure className="relative w-[12rem] h-[12rem] lg:w-[14rem] lg:h-[14rem]">
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
                                                    <div className="h-14 flex flex-col items-center justify-start">
                                                        <h4 className="product-title">
                                                            {name}
                                                        </h4>
                                                    </div>
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