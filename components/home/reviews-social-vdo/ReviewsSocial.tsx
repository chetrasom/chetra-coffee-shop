"use client";

import { AiFillStar } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './swiperStyle.css'

import { videos } from "@/data";
import VideoSlide from "./VideoSlide";
import BorderGradient from "@/components/BorderGradient";

const ReviewsSocial = () => {
    return (
        <section className="pt-16 pb-0 md:py-16">
            <div className="container">

                <div className="text-center mx-auto max-w-2xl mb-4">
                    <h2 className="h2 mt-2 text-primary mb-2">Social Media Highlights</h2>
                    <p className="text-lg mx-auto max-w-xl text-gray-700 dark:text-gray-300 px-5">
                        Our customers reviews on how our coffee fuels their day <span className="font-display">&</span> eases their stress.
                    </p>
                    <div className="max-w-sm mx-auto mt-4">
                        <BorderGradient />
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-2 mb-4 lg:flex-row">
                    <div className="flex justify-center gap-x-1">
                        {Array.from({ length: 5 }, (_, i) => {
                            return <AiFillStar key={i} className="text-amber-400 w-5 h-5" />
                        })}
                    </div>
                    <p className="text-[15px] font-open_sans">
                        Happy Customers Reviews
                    </p>
                </div>

                <Swiper
                    id="review-social"
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
                    className="mySwiper mt-16"
                >
                    {videos.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <VideoSlide index={index} item={item} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
export default ReviewsSocial