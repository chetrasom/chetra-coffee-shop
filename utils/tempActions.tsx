'use server';

import db from "@/utils/db";

// 🔧 Reusable helper to serialize product - Fixed warning in product.price in console.
const serializeProduct = (product: any) => ({
    ...product,
    price: product.price.toNumber(),
});

// #1- BASIC Fetch all products
// export const fetchAllProducts = async () => {
//     const products = await db.product.findMany({
//         orderBy: {
//             createdAt: 'desc',
//         },
//     });
//     return products
// };


// #2- Fetch all products with Multiple Filters ( Search, Category, Brand, CoffeeType )
// export const fetchAllProducts = async ({
//     search = '',
//     category,
//     brand,
//     coffeeType,
//     sort = 'newest',
// }: {
//     search?: string,
//     category?: string,
//     brand?: string,
//     coffeeType?: string,
//     sort?: string;
//     page?: number,
//     perPage?: number,
// }) => {
//     const products = await db.product.findMany({
//         where: {
//             // ...(search && {}) 👉 "If search has a value, add this filter to the object."
//             ...(search && {
//                 name: {
//                     contains: search,
//                     mode: 'insensitive',
//                 },
//             }),
//             ...(category && {
//                 category: {
//                     slug: category,
//                 },
//             }),
//             ...(brand && {
//                 brand: {
//                     slug: brand,
//                 },
//             }),
//             ...(coffeeType && {
//                 coffeeType: {
//                     slug: coffeeType,
//                 },
//             }),
//         },
//         orderBy:
//             sort === 'price-asc'
//             ? { price: 'asc' }
//             : sort === 'price-desc'
//             ? { price: 'desc' }
//             : sort === 'name-asc'
//             ? { name: 'asc' }
//             : sort === 'name-desc'
//             ? { name: 'desc' }
//             : sort === 'best-seller'
//             ? { bestSeller: 'desc' }
//             : { createdAt: 'desc' // default: newest
//         },
//         include: {
//             category: true,
//             brand: true,
//             coffeeType: true,
//         },
//     });

//     return products.map(serializeProduct);
// };