import AboutUs from "./about-us/AboutUs";
import BestSeller from "./best-seller/BestSeller";
import ContactUs from "./contact/ContactUs";
import PopularDrinks from "./drinks/PopularDrinks";
import Hero from "./hero/Hero";
import ReviewsSocial from "./reviews-social-vdo/ReviewsSocial";

const Home = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <BestSeller />
            <PopularDrinks />
            <ReviewsSocial />
            <ContactUs />
        </>
    )
}
export default Home;