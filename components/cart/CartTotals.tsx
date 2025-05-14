import { Button } from "../ui/button"
import { Cart } from "@prisma/client"
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import FormContainer from "../form/FormContainer";
import { createOrderAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";

type CartTotalsProp = {
    cart: Cart;
}

const CartTotals = ({ cart }: CartTotalsProp) => {
    const { cartTotal, tax, orderTotal } = cart;
    
    return (
        <>
            <div className="border rounded-lg p-4">
                <h3 className="h3 font-bold text-primary tracking-wide">Order Summary</h3>
                <ul className="my-5 space-y-2.5">
                    <li>
                        <div className="text-secondary-foreground text-sm flex justify-between border-b pb-2.5">
                            <label>Subtotal</label>
                            <span>{formatCurrency(cartTotal)}</span>
                        </div>
                    </li>
                    <li>
                        <div className="text-secondary-foreground text-sm flex justify-between border-b pb-2.5">
                            <label>Shipping</label>
                            <span>{formatCurrency(0)}</span>
                        </div>
                    </li>
                    <li>
                        <div className="text-secondary-foreground text-sm flex justify-between border-b pb-2.5">
                            <label>Tax</label>
                            <span>{formatCurrency(tax)}</span>
                        </div>
                    </li>
                </ul>
                <div>
                    <div className="text-secondary-foreground font-bold text-base flex justify-between">
                        <label className="font-bold text-base">Order Total</label>
                        <span>{formatCurrency(orderTotal)}</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 space-y-4">
                <FormContainer action={createOrderAction}>
                    <SubmitButton 
                        text='Proceed to checkout'
                        className="btn-default w-full"
                    />
                </FormContainer>

                <Button 
                    variant="outline" 
                    className="capitalize w-full btn-default" 
                    asChild
                >
                    <Link href="/products">
                        continue shopping
                    </Link>
                </Button>
            </div>
        </>
    )
}
export default CartTotals