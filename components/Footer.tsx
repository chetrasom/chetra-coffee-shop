import Link from "next/link";
import { BsFacebook, BsTelegram, BsGithub } from "react-icons/bs";
import Image from "next/image";
import BorderGradient from "./BorderGradient";

const Footer = () => {
    return (
        <>
            <BorderGradient />
        
            <footer className="bg-muted pt-10">
                <div className="container">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-20 md:gap-y-14 lg:grid-cols-[40%_30%_30%] lg:gap-16">
                        <div>
                            <div className="flex items-end gap-2">
                                <Image 
                                    src={"/img/bean-img.png"}
                                    alt="bean"
                                    width={25}
                                    height={25}
                                />

                                <Link href={"/"} className="font-bold font-poppins text-xl tracking-wide text-primary md:text-[22px] lg:text-[24px]">
                                    ChetraCoffee
                                </Link>
                            </div>
                            <p className="mt-4 leading-relaxed max-w-md">
                                House No. 33, Street 271, Phnom Penh, Cambodia. The shop is open every Monday to Saturday, working hours 8:00 am to 5:00 pm. Saturday 8:00 am to 12:00 pm.
                            </p>
                        </div>

                        <div>
                            <h5 className="font-bold font-poppins text-xl tracking-wide text-primary md:text-[22px] lg:text-[24px] mb-4">
                                Quick Links
                            </h5>
                            <ul className="space-y-4 font-semibold">
                                <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                                <li><Link href="/products" className="hover:text-secondary transition-colors">Products</Link></li>
                                <li><Link href="#" className="hover:text-secondary transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="md:col-span-2 md:flex md:flex-col md:justify-center md:items-center lg:col-span-1 lg:flex-none lg:justify-start lg:items-start">
                            <h4 className="font-bold font-poppins text-xl tracking-wide text-primary md:text-[22px] lg:text-[24px] mb-4">Follow us on Socials</h4>
                            <div className="flex gap-x-3">
                                <Link 
                                    href="/" 
                                    className="block bg-secondary text-custom-white p-2 rounded-lg hover:opacity-90 transition-colors"
                                >
                                    <BsFacebook className="w-6 h-6" />
                                </Link>
                                <Link 
                                    href="/" 
                                    className="block bg-secondary text-custom-white p-2 rounded-lg hover:opacity-90 transition-colors"
                                >
                                    <BsGithub className="w-6 h-6" />
                                </Link>
                                <Link 
                                    href="/" 
                                    className="block bg-secondary text-custom-white p-2 rounded-lg hover:opacity-90 transition-colors"
                                >
                                    <BsTelegram className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="mt-4 py-5 text-center">
                        <div className="container">
                            <BorderGradient />
                        </div>
                        <p className="pt-5">&copy; Developed by Chetra SOM</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer