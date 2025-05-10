import { Suspense } from "react"
import SectionTitle from "@/components/global/SectionTitle"
import AboutUs from "@/components/home/about-us/AboutUs"
import Hero from "@/components/home/hero/Hero"
import LoadingContainer from "@/components/global/LoadingContainer"
import BestSeller from "@/components/home/best-seller/BestSeller"
import Image from "next/image"
import FeaturedCard from "@/components/home/featured/FeaturedCard"
import Featured from "@/components/home/featured/Featured"
import PopularDrinks from "@/components/home/drinks/PopularDrinks"
import ReviewsPage from "./reviews/page"
import ContactUs from "@/components/home/contact/ContactUs"
import ReviewsSocial from "@/components/home/reviews-social-vdo/ReviewsSocial"

const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <>
                <SectionTitle 
                    subTitle="Popular Choices"
                    title="Best Sellers"
                    description="Explore our most popular coffee products that our customers love. Taste the best of the best."
                    border={true}
                />
                <Suspense fallback={<LoadingContainer />}>
                    <BestSeller />
                </Suspense>
            </>

            <Featured />

            <>
                <SectionTitle 
                    subTitle="Customer Favorites"
                    title="Popular Drinks"
                    description="Discover our most loved coffee beverages, crafted to perfection. From classic favorites to unique blends, there's something for everyone."
                    border={true}
                />
                <Suspense fallback={<LoadingContainer />}>
                    <PopularDrinks />
                </Suspense>
            </>

            <ReviewsSocial />
            <ContactUs />
        </>
    )
}
export default HomePage