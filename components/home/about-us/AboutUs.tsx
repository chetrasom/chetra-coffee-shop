import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const AboutUs = () => {
    return (
        <section className="py-16 lg:py-[6.5rem] xl:py-[8rem]">
            <div className="container">
                <div className="max-w-md mx-auto grid grid-cols-1 gap-16 place-items-center place-content-center lg:max-w-none lg:grid-cols-[450px_500px] lg:gap-28">
                    <div className="text-center lg:text-left">
                        <span className="uppercase text-primary">about us</span>
                        <h1 className="h1 pt-2 leading-10">Taste the Coffee of Premium Quality</h1>
                        <div className="space-y-4 mb-8">
                            <p>
                                Welcome to ChetraCoffee, where coffee is pure passion. 
                                From bean to cup, we are dedicated to delivering 
                                excellence in every sip. Join us on a journey of 
                                flavor and quality, crafted with love to create the 
                                ultimate coffee experience.
                            </p>
                            <p>
                                We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Button variant={"accent"} asChild>
                                <Link href="/about">more about us</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/products">shop our coffee</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative grid place-items-center place-content-center py-5">
                        <div id="shape" className="w-[300px] h-[300px] rounded-full bg-custom-darkGreen md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"></div>
                        
                        <div className="absolute top-6 left-12 -rotate-[105deg] md:top-[2.5rem] md:left-[5rem]">
                            <figure className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px]">
                                <Image 
                                    src="/img/leaf-img.png"
                                    alt="coffee"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-contain"
                                />
                            </figure>
                        </div>

                        <div className="absolute bottom-[9rem] right-8 -rotate-[15deg] md:bottom-[12rem] md:right-[3.5em] lg:right-[4rem] lg:bottom-[15rem]">
                            <figure className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[85px] lg:h-[85px]">
                                <Image 
                                    src="/img/leaf-img.png"
                                    alt="coffee"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-contain"
                                />
                            </figure>
                        </div>

                        <div className="absolute">
                            <figure className="relative w-[280px] h-[280px] drop-shadow-lg md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
                                <Image 
                                    src="/img/about-coffee.png"
                                    alt="coffee"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-contain"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs