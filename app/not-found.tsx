import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

const NotFoundPage = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="bg-muted rounded-lg overflow-hidden p-5 flex flex-col items-center justify-center gap-y-5">
                    <h2 className="h2 leading-loose text-amber-500 text-center">
                        <p className="pb-2">Oops!</p>
                        <p>That page can’t be found.</p>
                    </h2>
                    <p className="text-secondary-foreground text-center">
                        Sometimes even we need a little extra coffee to function correctly.
                    </p>
                    <BsCart4 className="w-10 h-10 text-amber-500" />
                    
                    <Button className="h-11" variant="outline" asChild>
                        <Link href="/products" className="uppercase">
                            return to the shop
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default NotFoundPage;