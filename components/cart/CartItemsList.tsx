"use client";

import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { CartItemWithProduct } from "@/types";
import Link from "next/link";
import { formatCurrency } from "@/utils/formatCurrency";
import CartColumnAmount from "./CartColumnAmount";

type CartItemsListProp = {
    cartItems: CartItemWithProduct[],
    cartTotal: number,
};

const CartItemsList = ({ cartItems, cartTotal }: CartItemsListProp) => {
    return (
        <div className="w-full overflow-x-auto">
            <Table className="min-w-[600px]">
                <TableCaption className="text-left px-2 md:text-center">
                    A list of your recent invoices.
                </TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {cartItems.map((cartItem) => {
                        const { id, amount } = cartItem;
                        const { id: productId, imageUrl, name, price } = cartItem.product;

                        return (
                            <TableRow key={id}>
                                <TableCell>
                                    <div>
                                        {imageUrl && (
                                            <figure className="relative w-[75px] h-[75px] border rounded-lg overflow-hidden">
                                                <Image 
                                                    src={imageUrl}
                                                    alt="coffee"
                                                    fill
                                                    priority
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="w-full h-full object-contain"
                                                />
                                            </figure>
                                        )} 
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <Link href={`/products/${productId}`} className="mb-1 text-primary">
                                        {name}
                                    </Link>
                                    {/* <p className="text-sm">Instant Coffee</p> */}
                                </TableCell>

                                <TableCell>
                                    <CartColumnAmount id={id} quantity={amount}  />
                                </TableCell>
                                
                                <TableCell className="text-right">
                                    <p>{formatCurrency(price)}</p>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
                
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">{formatCurrency(cartTotal)}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
export default CartItemsList