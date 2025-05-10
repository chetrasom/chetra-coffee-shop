import Link from "next/link"

// icons
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { Button } from "@/components/ui/button";

import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";

import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CartPage = async () => {
    const { userId } = auth();
    if (!userId) redirect('/');

    // const cart = await fetchOrCreateCart({ userId });
    // await updateCart(cart);

    const previousCart = await fetchOrCreateCart({ userId });
    const { cartItems, currentCart } = await updateCart(previousCart);

    return (
        <section className="section">
            <div className="container">
                {/* Section Title */}
                <div className="pb-5">
                    <Link href="/products" className="flex items-center gap-x-2">
                        <MdOutlineKeyboardReturn className="w-4 h-4" />Continue shopping
                    </Link>
                    <h2 className="h2 leading-loose pt-2.5 pb-4 text-secondary-foreground">
                        Your Shopping Cart
                    </h2>
                </div>

                {/* Empty cart */}
                {cartItems.length === 0 ? (
                    <div className="bg-muted rounded-lg overflow-hidden p-5 flex flex-col items-center justify-center gap-y-5">
                        <h2 className="h2 leading-loose text-amber-500">
                            Empty Cart
                        </h2>
                        <BsCart4 className="w-10 h-10 text-amber-500" />
                        <Button asChild className="h-11">
                            <Link href="/products" className="flex items-center gap-x-2">
                                <MdOutlineKeyboardReturn className="w-4 h-4" />Continue shopping
                            </Link>
                        </Button>
                    </div>
                ): (
                    <div className="flex flex-col gap-5 lg:flex-row"> 
                        <div className="border rounded-lg p-2 flex-1">
                            <CartItemsList cartItems={cartItems} cartTotal={previousCart.cartTotal} />
                        </div>
                        <div className="lg:basis-1/4">
                            <CartTotals cart={currentCart} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
export default CartPage