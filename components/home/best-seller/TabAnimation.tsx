import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { formatCategory } from "@/lib/formatCategory";
import { ProductWithRelations } from "@/types";
import BestSellerProduct from "./BestSellerProduct";

const categories = ["all", "instant-coffee", "sachet-coffee", "ready-to-drink-coffee"];

type TabAnimationProp = {
    products: ProductWithRelations[]
}

const TabAnimation = ({ products }: TabAnimationProp) => {
    return (
        <Tabs defaultValue="all">
            {/* Tabs Header */}
            <TabsList className="flex flex-wrap gap-2 mb-10 bg-transparent w-full h-auto md:gap-4">
                {categories.map((cat) => (
                    <TabsTrigger 
                        asChild
                        key={cat} 
                        value={cat} 
                        className="capitalize rounded-md border px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-secondary data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-black"  
                    >
                        <Button className="font-bold font-open_sans text-primary">
                            {formatCategory(cat)}
                        </Button>
                    </TabsTrigger>
                ))}
            </TabsList>

            {/* Tabs Content */}
            {categories.map((cat) => {
                const filtered = cat === "all"
                    ? products.filter((p) => p.category.slug !== "drinks")
                    : products.filter(p => {
                        return p.category.slug !== "drinks" && p.category.slug === cat;
                    });

                return (
                    <TabsContent key={cat} value={cat}>
                        <div
                            key={cat}
                            className={`grid grid-cols-1 gap-x-2.5 gap-y-6 mt-12 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8`}
                        >
                            {filtered.slice(0,6).map((product) => {
                                return <BestSellerProduct key={product.id} product={product} />
                            })}
                        </div>
                    </TabsContent>

                    // <TabsContent key={cat} value={cat}>
                    //     <motion.div
                    //         key={cat}
                    //         initial={{ opacity: 0, y: 20 }}
                    //         animate={{ opacity: 1, y: 0 }}
                    //         transition={{ duration: 0.4, ease: "easeOut" }}
                    //         className={`grid grid-cols-1 gap-x-2.5 gap-y-6 mt-12 md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8`}
                    //     >
                    //         {filtered.slice(0,6).map((product) => {
                    //             return <BestSellerProduct key={product.id} product={product} />
                    //         })}
                    //     </motion.div>
                    // </TabsContent>
                );
            })}
        </Tabs>
    )
}
export default TabAnimation