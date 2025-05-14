import { Button } from "@/components/ui/button"
import Link from "next/link"
import TabAnimation from "./TabAnimation"
import { fetchBestsellerProducts } from "@/utils/actions"
import EmptyList from "@/components/global/EmptyList"

const BestSeller = async () => {
    const bestsellersProducts = await fetchBestsellerProducts();

    if (bestsellersProducts.length === 0 ) {
        return (
            <section className="section">
                <div className="container">
                    <EmptyList heading="No bestsellers right now. Check out all our products!">
                        <Button asChild className="mt-4 h-11">
                            <Link href="/products">Browse Products</Link>
                        </Button>
                    </EmptyList>
                </div>
            </section>
        )
    }

    return (
        <section className="pb-16">
            <div className="container">
                <TabAnimation products={bestsellersProducts} />
                <div className="pt-16 text-center">
                    <Button asChild className="btn">
                        <Link href="/products">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default BestSeller