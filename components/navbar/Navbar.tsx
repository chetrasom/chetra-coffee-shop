import { Suspense } from "react";
import CartButton from "./CartButton";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import NavSearchDialog from "./NavSearchDialog";
import NavSearch from "./NavSearch";

const Navbar = () => {
    return (
        <header className="bg-custom-darkGreen py-5 fixed top-0 left-0 z-10 w-full ease-linear transition-al">
                <div className="container">
                    {/* mobile */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-4 md:gap-x-6">
                                <CartButton />
                                <DarkMode />
                            </div>
                            <Logo />
                            <div className="flex items-center gap-x-2 md:gap-x-4">
                                <Suspense>
                                    <NavSearchDialog />
                                </Suspense>
                                <LinksDropdown />
                            </div>
                        </div>
                    </div>

                    {/* large */}
                    <div className="hidden lg:block">
                        <div className="flex items-center justify-between">
                            <Logo />
                            <Suspense>
                                <NavSearch />
                            </Suspense>
                            <div className="flex items-center gap-x-4">
                                <DarkMode />
                                <CartButton />
                                <LinksDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}
export default Navbar