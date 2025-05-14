import { fetchUserFavorites } from "@/utils/actions"
import BorderGradient from "@/components/BorderGradient"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsCart4 } from "react-icons/bs"
import { MdOutlineKeyboardReturn } from "react-icons/md"
import FavoriteProduct from "@/components/favorites/FavoriteProduct"

const FavoritesPage = async () => {
    const favorites = await fetchUserFavorites();

    return (
        <section className="section">
            <div className="container">

                <div className="pb-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='capitalize text-base md:text-lg'>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/products" className='capitalize text-base md:text-lg'>
                                    Products
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h2 className="h2 leading-loose pt-2.5 pb-4 text-secondary-foreground">
                        Your Favorites
                    </h2>

                    <BorderGradient />
                </div>

                {favorites.length === 0 ? (
                    <div className="bg-muted rounded-lg overflow-hidden flex flex-col items-center justify-center gap-y-5 px-5 py-8">
                        <h2 className="h2 font-poppins font-bold text-center leading-loose text-secondary">
                            You have no favorites yet.
                        </h2>

                        <BsCart4 className="w-10 h-10 text-secondary" />
                        <Button asChild className="mt-4 btn-default">
                            <Link href="/products" className="flex items-center gap-x-2">
                                <MdOutlineKeyboardReturn className="w-4 h-4" />Continue shopping
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
                        {favorites.map((product) => {
                            return <FavoriteProduct key={product.id} product={product} />
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}
export default FavoritesPage