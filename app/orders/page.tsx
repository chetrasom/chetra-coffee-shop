import Image from "next/image"
import BorderGradient from "@/components/BorderGradient"
import ProductGrid from "@/components/products/ProductsGrid"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsCart4 } from "react-icons/bs"
import { MdOutlineKeyboardReturn } from "react-icons/md"
import { LiaCommentSolid } from "react-icons/lia";
import { fetchUserOrders } from "@/utils/actions"
import { formatCurrency } from "@/utils/formatCurrency"
import { formatDate } from "@/utils/formatDate"

const OrdersPage = async () => {
    const orders = await fetchUserOrders();
    
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
                        Your Orders
                    </h2>

                    <BorderGradient />
                </div>

                {/* Orders table */}
                <div className="w-full overflow-x-auto">
                    <Table className="min-w-[600px]">
                        <TableCaption className="text-left px-2 md:text-center">
                            Total orders : {orders.length}
                        </TableCaption>

                        <TableHeader>
                            <TableRow>
                                <TableHead>Products</TableHead>
                                <TableHead>Order Total</TableHead>
                                <TableHead>Tax</TableHead>
                                <TableHead>Shipping</TableHead>
                                <TableHead className="text-right">Date</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {orders.map((order) => {
                                const { id, products, orderTotal, tax, shipping, createdAt } = order;
                                return (
                                    <TableRow key={id}>
                                        <TableCell>{products}</TableCell>
                                        <TableCell>{formatCurrency(orderTotal)}</TableCell>
                                        <TableCell>{formatCurrency(tax)}</TableCell>
                                        <TableCell>{formatCurrency(shipping)}</TableCell>
                                        <TableCell className="text-right">
                                            {formatDate(createdAt)}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                            {/* {Array.from({ length: 4 }, (_, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>5</TableCell>
                                        <TableCell>$555.00</TableCell>
                                        <TableCell>$50.00</TableCell>
                                        <TableCell>$5.00</TableCell>
                                        <TableCell className="text-right">
                                            April 16, 2025
                                        </TableCell>
                                    </TableRow>
                                )
                            })} */}
                        </TableBody>
                        
                        <TableFooter></TableFooter>
                    </Table>
                </div>
                

                {/* Empty cart */}
                {/* <div className="bg-muted rounded-lg overflow-hidden p-5 flex flex-col items-center justify-center gap-y-5">
                    <h2 className="h2 leading-loose text-amber-500">
                        You have no orders yet.
                    </h2>
                    <BsCart4 className="w-10 h-10 text-amber-500" />
                    <Button asChild className="h-11">
                        <Link href="/" className="flex items-center gap-x-2">
                            <MdOutlineKeyboardReturn className="w-4 h-4" />Continue shopping
                        </Link>
                    </Button>
                </div> */}

            </div>
        </section>
    )
}
export default OrdersPage