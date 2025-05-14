"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AiFillStar } from "react-icons/ai"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './aboutStyle.css'

// import required modules
import { Navigation } from 'swiper/modules';

import SectionTitle from "@/components/global/SectionTitle";
import { aboutReviews, features } from "@/data";
import FeaturedCard from "@/components/home/featured/FeaturedCard";
import ContactUs from "@/components/home/contact/ContactUs";

const AboutPage = () => {
    return (
        <section className="section">
            <div className="">
                
                {/* ------------------- Welcome ------------------- */}
                <div className="container mb-16 lg:mb-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                    <div>
                        <figure className="relative aspect-[4/4] rounded-2xl overflow-hidden">
                            <Image 
                                src="/images/about-welcome.jpg"
                                alt="about"
                                fill
                                priority
                                className="w-full h-full object-cover"
                            />
                        </figure>
                    </div>

                    <div className="self-center mt-5 lg:mt-0">
                        <span className="text-sm md:text-[15px]">BE OUR GUEST</span>
                        <h2 className="h2 pt-2 pb-5 text-primary">Taste the Coffee of Premium Quality</h2>
                        <p className="text-secondary-foreground/75 pb-2">
                            Welcome to ChetraCoffee, where coffee is not just a beverage but a passion. From the finest beans to the perfect cup, we are dedicated to delivering excellence in every sip. Embark on a journey of flavor and quality, crafted with love to create an unforgettable coffee experience.
                        </p>
                        <p className="text-secondary-foreground/75 pb-5">
                            We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.
                        </p>

                        <div className="mb-6">
                            <h4 className="text-[20px] font-body font-bold mb-2.5 text-primary">Visit Us</h4>
                            <p className="mb-1">Operating Hours:</p>
                            <p className="text-[15px] pb-1">Mon-Fri: 8:00 AM – 5:00 PM</p>
                            <p className="text-[15px]">Saturday: 8:00 AM – 12:00 PM</p>
                        </div>

                        <Button className="btn">
                            <Link href="/products">Shop Our Coffee</Link>
                        </Button>
                    </div>
                </div>

                {/* ------------------- Our story ------------------- */}
                <div className="bg-muted">
                    <div className="mb-16 lg:mb-24 container py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
                        <div>
                            <span className="text-sm md:text-[15px] uppercase">Who We Are</span>
                            <h2 className="h2 pb-5 text-primary">Our Story</h2>
                            <p className="text-secondary-foreground/75 pb-2">
                                ChetraCoffee is a small business specializing in premium coffee, We offer a variety of coffee options, ensuring that our customers can find their perfect brew. From instant coffee to specialty drinks, we’ve got something for everyone.
                            </p>

                            <div className="mb-6">
                                <h4 className="text-[20px] font-bold font-body mb-2.5 text-primary">We Stated In 2025</h4>
                                <p className="text-secondary-foreground/75">
                                    In 2025, we opened our doors with the aim of providing high-quality coffee that fits into your busy lifestyle. Our shop features a cozy seating area and a barista ready to craft the perfect cup of coffee for you. Whether you need a quick caffeine fix or want to relax and enjoy a drink, we have you covered.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-[20px] font-bold font-body mb-2.5 text-primary">Online Shop</h4>
                                <p className="text-secondary-foreground/75">
                                    At ChetraCoffee, we strive to offer convenience without compromising on quality. Whether you’re in a rush or simply looking for a reliable coffee supplier, we are here to ensure you get the coffee you love, quickly and conveniently.
                                </p>
                            </div>

                            {/* <Button>
                                <Link href="/products">Shop Our Coffee</Link>
                            </Button> */}
                        </div>
                        <figure className="bg-muted relative aspect-[4/4] rounded-2xl overflow-hidden">
                            <Image 
                                src="/images/about-barista.png"
                                alt="about"
                                fill
                                priority
                                className="w-full h-full object-contain p-4"
                            />
                        </figure>
                    </div>
                </div>

                {/* ------------------- Featured ------------------- */}
                <div className="container py-16">
                    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
                        {features.map((feature, index) => {
                            return (
                                <FeaturedCard
                                    key={index}
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* ------------------- About Testimonial ------------------- */}
                <div className="container mt-16">
                    <SectionTitle 
                        subTitle="Customer visited our place"
                        title="Customer Reviews"
                        border
                    />

                    <Swiper
                        id="about"
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper"
                    >
                        {aboutReviews.map((item, index) => {
                            return (
                                <SwiperSlide key={index} className="py-10">
                                    <article className="h-56 border border-muted rounded-xl overflow-hidden shadow-lg p-5">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-x-2">
                                                <figure className="relative w-16 h-16 rounded-full overflow-hidden">
                                                    <Image 
                                                        src={item.image}
                                                        alt="profile"
                                                        fill
                                                        priority
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </figure>
                                                <div className="text-left">
                                                    <h4 className="text-primary font-bold">{item.username}</h4>
                                                    <p className="text-sm md:text-[15px]">{item.job}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-center gap-x-1">
                                                {Array.from({ length: 5 }, (_, i) => {
                                                    return <AiFillStar key={i} className="text-amber-400 w-4 h-4" />
                                                })}
                                            </div>
                                        </div>
                                        <div className="h-[1px] w-full bg-muted my-3"></div>
                                        <p className="text-[15px] text-center leading-relaxed md:max-w-2xl lg:max-w-4xl">
                                            {item.comments}
                                        </p>
                                    </article>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                {/* ------------------- Contact ------------------- */}
                <ContactUs />
            </div>
        </section>
    )
}
export default AboutPage