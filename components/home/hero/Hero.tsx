import Link from "next/link"
import Image from "next/image"
import { Button } from "../../ui/button"
import { AiFillStar } from "react-icons/ai";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
    return (
        <section className="bg-custom-darkGreen overflow-hidden pt-28 pb-16 lg:pt-32 xl:pt-[10rem]">
            <div className="container">
                <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-24">
                    <div className="text-custom-white">
                        <div className="flex flex-col items-center gap-2 mb-4 lg:flex-row lg:justify-start">
                            <div className="flex justify-center gap-x-1">
                                {Array.from({ length: 5 }, (_, i) => {
                                    return <AiFillStar key={i} className="text-amber-400 w-4 h-4" />
                                })}
                            </div>
                            <span className="text-[15px]">
                                Over 10,000 Happy Customers
                            </span>
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="h1 drop-shadow-md">
                                Fresh Coffee in the Morning
                            </h1>
                            <h3 className="h3 mb-4">Clean Energy. Bold Taste. Zero Compromise.</h3>
                            <p className="text-custom-white mx-auto leading-normal md:max-w-md lg:mx-0">
                                Fuel your daily hustle with strong coffees and delicious functional drinks, supercharged with all natural ingredients.
                            </p>
                            <div className="mt-6 md:mt-10">
                                <Button asChild variant={"accent"}>
                                    <Link href="/products">Shop Our Coffee</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="py-10 flex items-center gap-x-2 max-w-sm mx-auto lg:pb-0 lg:mx-0">
                            <figure className="relative w-14 h-14">
                                <Image 
                                    src="/temp/happiness-badge_icon.svg"
                                    alt="happiness-badge_icon"
                                    fill
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                            <div className="flex-1 px-2">
                                <p className="text-custom-white text-[15px] font-medium mb-1 lg:text-base">100% Happiness Guarantee</p>
                                <p className="text-custom-white text-xs lg:text-sm">
                                    30-day money back guarantee if you don&apos;t love it.No questions asked.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full rounded-2xl">
                        <HeroCarousel />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero