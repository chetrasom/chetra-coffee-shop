import Link from "next/link";
import { Button } from "../ui/button"
import { GiShoppingBag} from "react-icons/gi";
import { fetchCartItems } from "@/utils/actions";

const CartButton = async () => {
    const numberInCart = await fetchCartItems();

    return (
        <Button
            asChild
            variant="outline"
            size="icon"
            className="relative flex items-center justify-center"
        >
            <Link href="/">
                <GiShoppingBag className="h-[1.2rem] w-[1.2rem] text-custom-green dark:text-custom-white" />
                <span className='absolute -top-3 -right-3 bg-primary border-t border-[#fafffe] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs'>
                    {numberInCart}
                </span>
            </Link>
        </Button>
    )
}
export default CartButton