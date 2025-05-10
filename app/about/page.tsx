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
import { aboutReviews } from "@/data";
import { FaPhoneAlt } from "react-icons/fa";
import { BsMessenger, BsTelegram } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import { LuClock } from "react-icons/lu";
import { IoIosPhonePortrait } from "react-icons/io";

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
                        <h2 className="h2 pb-5 text-primary">Taste the Coffee of Premium Quality</h2>
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

                        <Button>
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
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
                        <div className="bg-muted rounded-xl p-5 text-center">
                            <figure className="relative overflow-hidden w-[75px] h-[75px] rounded-full shadow-lg mx-auto">
                                <Image 
                                    src="/images/icons/6.png"
                                    alt="g"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <h4 className="h4 text-primary font-semibold mt-2 mb-3">Awesome Aroma</h4>
                            <p className="text-[15px]">
                                At ChetraCoffee, every cup begins with a captivating aroma. Our freshly brewed coffee fills the air with an irresistible scent that awakens your senses.
                            </p>
                        </div>
                        
                        <div className="bg-muted rounded-xl p-5 text-center">
                            <figure className="relative overflow-hidden w-[75px] h-[75px] rounded-full shadow-lg mx-auto">
                                <Image 
                                    src="/images/icons/4.png"
                                    alt="g"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <h4 className="h4 text-primary font-semibold mt-2 mb-3">Premium Quality</h4>
                            <p className="text-[15px]">
                                We believe in excellence. Our coffee is made from carefully selected beans, expertly roasted to deliver a smooth, rich flavor in every sip.
                            </p>
                        </div>

                        <div className="bg-muted rounded-xl p-5 text-center">
                            <figure className="relative overflow-hidden w-[75px] h-[75px] rounded-full shadow-lg mx-auto">
                                <Image 
                                    src="/images/icons/1.png"
                                    alt="g"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <h4 className="h4 text-primary font-semibold mt-2 mb-3">Pure Ingredients</h4>
                            <p className="text-[15px]">
                                We prioritize purity and freshness. Our beans are sourced from trusted farmers, ensuring that every cup is natural, delicious, and free from additives.
                            </p>
                        </div>

                        <div className="bg-muted rounded-xl p-5 text-center">
                            <figure className="relative overflow-hidden w-[75px] h-[75px] rounded-full shadow-lg mx-auto">
                                <Image 
                                    src="/images/icons/3.png"
                                    alt="g"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <h4 className="h4 text-primary font-semibold mt-2 mb-3">Signature Blends</h4>
                            <p className="text-[15px]">
                                From classic black coffee to creamy lattes, our signature blends are crafted to suit every taste. Whether you love it strong or smooth, we have the perfect cup for you.
                            </p>
                        </div>
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
                                                    <h4 className="text-primary">{item.username}</h4>
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
                <div className="container py-16">
                    <div className="text-center mb-16">
                       <h3 className="h2 text-primary mb-4">Ready to Explore?</h3>
                       <p className="max-w-md mx-auto">
                            Browse our selection and discover your new favorite coffee. Have questions? Feel free to contact us.
                       </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:py-14">

                        <div className="space-y-10 lg:justify-self-end">
                            <div className="max-w-xs flex flex-col items-center justify-center">
                                <h3 className="text-2xl font-medium text-custom-green dark:text-secondary-foreground drop-shadow-sm pb-5">
                                    Write Us
                                </h3>
                                <div className="flex gap-x-3">
                                    <Button asChild size={"icon"}>
                                        <Link href="/"><FaPhoneAlt className="w-5 h-5" /></Link>
                                    </Button>
                                    <Button asChild size={"icon"}>
                                        <Link href="/"><BsMessenger className="w-5 h-5" /></Link>
                                    </Button>
                                    <Button asChild size={"icon"}>
                                        <Link href="/"><BsTelegram className="w-5 h-5" /></Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="max-w-xs flex flex-col items-center justify-center gap-y-2">
                                <h3 className="text-2xl font-medium text-custom-green dark:text-secondary-foreground drop-shadow-sm pb-2">
                                    Shop Location
                                </h3>
                                <p className="text-center pb-4">#168, Street 271 - Sangkat Beoung Salang, Khan Toul Kork, Phnom Penh, Cambodia</p>
                                <Link href="/" className="flex gap-x-1 text-primary hover:underline underline-offset-2">
                                    <PiMapPinFill className="w-5 h-5" />
                                    View On Map
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-10 order-1 md:order-none lg:order-1 lg:justify-self-start">
                            <div className="max-w-xs flex flex-col items-center justify-center gap-y-2">
                                <h3 className="text-2xl font-medium text-custom-green dark:text-secondary-foreground drop-shadow-sm pb-2">
                                    Opening Hours
                                </h3>
                                <div className="flex flex-col gap-y-2">
                                    <div className="flex items-start gap-x-1">
                                        <LuClock className="w-5 h-5 text-primary mt-0.5" />
                                        <div className="text-secondary-foreground/75">
                                            <ul className="space-y-1">
                                                <li>Monday - Friday</li>
                                                <li className="text-sm text-secondary-foreground/75">8:00 AM - 10:00 PM</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-x-1">
                                        <LuClock className="w-5 h-5 text-primary mt-0.5" />
                                        <div className="text-secondary-foreground/75">
                                            <ul className="space-y-1">
                                                <li>Saturday - Sunday</li>
                                                <li className="text-sm text-secondary-foreground/75">8:00 AM - 5:00 PM</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-xs flex flex-col items-center justify-center gap-y-2">
                                <h3 className="text-2xl font-medium text-custom-green dark:text-secondary-foreground drop-shadow-sm pb-2">
                                    Delivery
                                </h3>
                                <div className="flex gap-x-1">
                                    <IoIosPhonePortrait className="w-5 h-5 text-primary" />
                                    <p>(+855)-93-903-894</p>
                                </div>
                                <div className="flex gap-x-1">
                                    <IoIosPhonePortrait className="w-5 h-5 text-primary" />
                                    <p>(+855)-93-399-697</p>
                                </div>

                            </div>
                        </div>

                        <div className="relative grid place-content-center place-items-center mt-12 md:col-span-2 lg:col-span-1">
                            <div id="shape" className="drop-shadow-lg rounded-full bg-custom-darkGreen w-[300px] h-[300px] md:w-[375px] md:h-[375px]"></div>
                            <div className="absolute -top-14 md:-top-[4.5rem]">
                                <figure className="relative w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem]">
                                    <Image 
                                        src="/img/contact-delivery.png"
                                        alt="contact"
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-full object-contain"
                                        style={{ maskImage: "linear-gradient(to bottom, green 80%, transparent 100%)" }}
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default AboutPage