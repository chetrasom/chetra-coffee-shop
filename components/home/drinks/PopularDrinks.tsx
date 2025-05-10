import Link from "next/link"
import { Button } from "@/components/ui/button"
import DrinkCard from "./DrinkCard"
import { fetchPopularDrinks } from "@/utils/actions"
import EmptyList from "@/components/global/EmptyList"

const PopularDrinks = async () => {
    const popularDrinks = await fetchPopularDrinks();

    if (popularDrinks.length === 0 ) {
        return (
            <section className="section">
                <div className="container">
                    <EmptyList heading="No Popular Drinks right now. Check out all our products!">
                        <Button asChild className="mt-4 h-11">
                            <Link href="/products">Browse Products</Link>
                        </Button>
                    </EmptyList>
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="container">
                <div className={`${popularDrinks.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} grid gap-x-2.5 gap-y-5 md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8`}>
                    {popularDrinks.map((drink) => {
                        return <DrinkCard key={drink.id} drink={drink} />
                    })}
                </div>
                <div className="pt-16 text-center">
                    <Button asChild>
                        <Link href="/products">View All Drinks</Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}
export default PopularDrinks