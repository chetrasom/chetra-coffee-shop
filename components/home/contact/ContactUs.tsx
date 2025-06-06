import SectionTitle from "@/components/global/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { BsMessenger, BsTelegram } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import { FaPhoneAlt } from 'react-icons/fa';
import { LuClock } from "react-icons/lu";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const ContactUs = () => {
    return (
        <section className="py-16">
            <div className="container">
                <SectionTitle title="contact us" border />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:py-14">

                    <div className="space-y-10 lg:justify-self-end">
                        <div className="max-w-xs flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-primary dark:text-secondary-foreground drop-shadow-sm pb-5">
                                Write Us
                            </h3>
                            <div className="flex gap-x-3">
                                <Link 
                                    href="/" 
                                    className="block bg-secondary text-custom-white p-2 rounded-lg hover:opacity-90 transition-colors"
                                >
                                    <FaPhoneAlt className="w-6 h-6" />
                                </Link>
                                <Link 
                                    href="/" 
                                    className="block bg-secondary text-custom-white p-2 rounded-lg hover:opacity-90 transition-colors"
                                >
                                    <BsMessenger className="w-6 h-6" />
                                </Link>
                                <Link 
                                    href="/" 
                                    className="block bg-secondary text-custom-white p-2 rounded-lg hover:opacity-90 transition-colors"
                                >
                                    <BsTelegram className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>

                        <div className="max-w-xs flex flex-col items-center justify-center gap-y-2">
                            <h3 className="text-2xl font-bold text-primary dark:text-secondary-foreground drop-shadow-sm pb-2">
                                Shop Location
                            </h3>
                            <p className="text-center pb-4">
                                #168, Street 271 - Sangkat Beoung Salang, Khan Toul Kork, Phnom Penh, Cambodia
                            </p>
                            <Link href="/" className="flex gap-x-1 font-bold text-primary underline hover:underline underline-offset-2">
                                <PiMapPinFill className="w-5 h-5 text-red-500" />
                                View On Map
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-10 order-1 md:order-none lg:order-1 lg:justify-self-start">
                        <div className="max-w-xs flex flex-col items-center justify-center gap-y-2">
                            <h3 className="text-2xl font-bold text-primary dark:text-secondary-foreground drop-shadow-sm pb-2">
                                Opening Hours
                            </h3>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex items-start gap-x-1.5">
                                    <LuClock className="w-5 h-5 text-secondary mt-0.5" />
                                    <div className="text-secondary-foreground/75">
                                        <ul className="space-y-1">
                                            <li className="font-bold">Monday - Friday</li>
                                            <li className="text-sm text-secondary-foreground/75">8:00 AM - 10:00 PM</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex items-start gap-x-1.5">
                                    <LuClock className="w-5 h-5 text-secondary mt-0.5" />
                                    <div className="text-secondary-foreground/75">
                                        <ul className="space-y-1">
                                            <li className="font-bold">Saturday - Sunday</li>
                                            <li className="text-sm text-secondary-foreground/75">8:00 AM - 5:00 PM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-xs flex flex-col items-center justify-center gap-y-2">
                            <h3 className="text-2xl font-bold text-primary dark:text-secondary-foreground drop-shadow-sm pb-2">
                                Delivery
                            </h3>
                            <div className="flex items-center gap-x-1">
                                <HiMiniDevicePhoneMobile className="w-5 h-5 text-secondary" />
                                <span>(+855)-93-903-894</span>
                            </div>
                            <div className="flex gap-x-1">
                                <HiMiniDevicePhoneMobile className="w-5 h-5 text-secondary" />
                                <p>(+855)-93-399-697</p>
                            </div>

                        </div>
                    </div>

                    <div className="relative grid place-content-center place-items-center mt-12 md:col-span-2 lg:col-span-1">
                        <div id="shape" className="drop-shadow-lg rounded-full bg-secondary w-[300px] h-[300px] md:w-[375px] md:h-[375px]"></div>
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
        </section>
    )
}
export default ContactUs