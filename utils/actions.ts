'use server';

import db from "@/utils/db";
import { serialize } from "@/lib/serialize";
import { ProductWithRelations } from "@/types";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from 'next/cache';
import { reviewSchema, validateWithZodSchema } from "./schemas";
import { Cart } from '@prisma/client';

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # Reusable getAuthUser() and RENDER ERROR
export const getAuthUser = async () => {
    const user = await currentUser();
    if (!user) redirect('/');
    return user;
};

const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
        message: error instanceof Error ? error.message : 'an error occurred',
    };
};

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # HOMEPAGE
export const fetchBestsellerProducts = async () => {
    const products = await db.product.findMany({
        where: {
            bestSeller: true
        },
        include: {
            category: true,
            brand: true,
            coffeeType: true,
        },
        orderBy: {
            createdAt: 'desc'
        },
    });

    return serialize(products);
};

export async function fetchPopularDrinks() {
    const popularDrinks = await db.product.findMany({
        where: {
            bestSeller: true,
            category: { slug: 'drinks' },  // Filter only the drinks category
        },
        include: {
            category: true,
            brand: true,
            coffeeType: true,
        },
        orderBy: {
            createdAt: 'desc', // Sort by newest first
        },
    });
  
    return serialize(popularDrinks);
};

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # PRODUCTS PAGE - Multiple Filters
export const fetchAllProducts = async ({
    search = '',
    category,
    brand,
    coffeeType,
    sort = 'newest',
    page = 1,  // Default page is 1
    limit = 10, // Default limit is 10 products per page
}: {
    search?: string,
    category?: string,
    brand?: string,
    coffeeType?: string,
    sort?: string;
    page?: number;
    limit?: number;
}) => {
    const perPage = limit;  // Items per page (e.g., 10)
    const skip = (page - 1) * perPage;  // Calculate how many products to skip for pagination

    const products = await db.product.findMany({
        where: {
            ...(search && { name: { contains: search, mode: 'insensitive' } }),
            ...(category && { category: { slug: category } }),
            ...(brand && { brand: { slug: brand } }),
            ...(coffeeType && { coffeeType: { slug: coffeeType } }),
        },
        skip: skip,  // Skip results based on page
        take: perPage,  // Fetch the limit number of results
        orderBy:
            sort === 'price-asc'
                ? { price: 'asc' }
                : sort === 'price-desc'
                ? { price: 'desc' }
                : sort === 'name-asc'
                ? { name: 'asc' }
                : sort === 'name-desc'
                ? { name: 'desc' }
                : { createdAt: 'desc' },  // Default sorting by newest
        include: {
            category: true,
            brand: true,
            coffeeType: true,
        }
    });

    // Fetch the total count of products for pagination purposes
    const totalProducts = await db.product.count({
        where: {
            ...(search && { name: { contains: search, mode: 'insensitive' } }),
            ...(category && { category: { slug: category } }),
            ...(brand && { brand: { slug: brand } }),
            ...(coffeeType && { coffeeType: { slug: coffeeType } }),
        },
    });

    const totalPages = Math.ceil(totalProducts / perPage);  // Calculate the total number of pages

    return {
        products: serialize(products),
        totalPages,
        currentPage: page,  // Return the current page for frontend usage
    };
};

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # SINGLE PAGE
export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });

    if (!product) {
        redirect('/products')
    }

    return serialize(product);
};

export const fetchRelatedProducts = async (productId: string, categoryId: string) => {
    const relatedProducts = await db.product.findMany({
        where: {
            categoryId,
            NOT: { id: productId },
        },
        take: 6, // fetch only 6 related products
    });

    return serialize(relatedProducts);
};

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # FAVORITE PAGE
// # fetchFavoriteId: Checks whether a product is favorite by the current user.
export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
    const user = await getAuthUser();
    
    const favorite = await db.favorite.findFirst({
        where: {
            productId,
            clerkId: user.id
        },
        select: {
            id: true
        },
    });

    return favorite?.id || null;
};

// # toggleFavoriteAction: Add or Remove Favorite product by Current user and stay in current page.
export const toggleFavoriteAction = async (prevState: {
    productId: string;
    favoriteId: string | null;
    pathname: string;
}) => {
    const user = await getAuthUser();
    const { productId, favoriteId, pathname } = prevState;
    
    try {
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId,
                },
            });
        } else {
            await db.favorite.create({
                data: {
                    productId,
                    clerkId: user.id,
                },
            });
        }
        revalidatePath(pathname);

        return { message: favoriteId ? 'Removed from Faves' : 'Added to Faves' };
    } catch (error) {
        return renderError(error);
    }
};

// # Fetch favorite products by current user.
export const fetchUserFavorites = async () => {
    const user = await getAuthUser();
  
    const products = await db.product.findMany({
        where: {
            favorites: {
                some: {
                    clerkId: user.id,
                },
            },
        },
        include: {
            category: true,
            brand: true,
            coffeeType: true,
        },
    });
  
    return serialize(products);
};

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # REVIEWS

// # Writing Review Form
export const createReviewAction = async (
    prevState: any,
    formData: FormData
) => {
    const user = await getAuthUser();

    try {
        const rawData = Object.fromEntries(formData);

        const validatedFields = validateWithZodSchema(reviewSchema, rawData);

        await db.review.create({
            data: {
                ...validatedFields,
                clerkId: user.id,
            },
        });

        revalidatePath(`/products/${validatedFields.productId}`);
        return { message: 'Review submitted successfully' };
    } catch (error) {
        return renderError(error)
    }
};
 
// # Product Review
export const fetchProductReviews = async (productId: string) => {
    const reviews = await db.review.findMany({
        where: {
            productId
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return serialize(reviews)
};

// # Product Rating
export const fetchProductRating = async (productId: string) => {
    const result = await db.review.groupBy({
        by: ['productId'],
        _avg: {
            rating: true,
        },
        _count: {
            rating: true,
        },
        where: {
            productId,
        },
    });

    // empty array if no reviews
    return {
        rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
        count: result[0]?._count.rating ?? 0,
    };
};

// # Review Page
export const fetchProductReviewsByUser = async () => {
    const user = await getAuthUser();

    const reviews = await db.review.findMany({
        where: {
            clerkId: user.id,
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            product: {
                select: {
                    id: true,
                    imageUrl: true,
                    name: true,
                },
            },
        },
    });

    return reviews;
};

// # Review Card
export const deleteReviewAction = async (prevState: { reviewId: string }) => {
    const { reviewId } = prevState;
    const user = await getAuthUser();

    try {
        await db.review.delete({
            where: {
                id: reviewId,
                clerkId: user.id,
            },
        });
        revalidatePath('/reviews');
        return { message: 'Review deleted successfully' };
    } catch (error) {
        return renderError(error);
    }
};

// # If the user is not logged in, or if they have already reviewed the product,
// # don't show the "Write a Review" button.
export const findExistingReview = async (userId: string, productId: string) => {
    return db.review.findFirst({
        where: {
            clerkId: userId,
            productId,
        },
    });
};

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐ # CART PAGE

// #1. Fetch cart numItemsInCart and Show in CartButton
export const fetchCartItems = async () => {
    const { userId } = auth();
    
    const cart = await db.cart.findFirst({
        where: {
            clerkId: userId ?? '',
        },
        select: {
            numItemsInCart: true,
        },
    });

    return cart?.numItemsInCart || 0;
};

// #2. This fetches one product by its unique id. && Call it in addToCartAction() - 
const fetchProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });

    if (!product) {
        throw new Error('Product not found');
    }

    return product;
};

// #4. Reusable, Eagerly load related data from user cart. && Call it in addToCartAction()
const includeProductClause = {
    cartItems: {
        include: {
            product: true,
        },
    },
};

// #3. Finding an existing cart or creating a new one.
export const fetchOrCreateCart = async ({ 
    userId, 
    errorOnFailure = false 
}: {
    userId: string;
    errorOnFailure?: boolean;
}) => {
    let cart = await db.cart.findFirst({
        where: {
            clerkId: userId,
        },
        include: includeProductClause,
    });

    if (!cart && errorOnFailure) {
        throw new Error('Cart not found');
    };

    if (!cart) {
        cart = await db.cart.create({
            data: {
                clerkId: userId,
            },
            include: includeProductClause,
        });
    };

    return serialize(cart);
};

// #5. Checks if a cart item exists and either updates the quantity or creates a new cart item accordingly.
const updateOrCreateCartItem = async ({
    productId, cartId, amount
}: {
    productId: string;
    cartId: string;
    amount: number;
}) => {
    let cartItem = await db.cartItem.findFirst({
        where: {
            productId,
            cartId
        },
    });

    // Update amount
    if (cartItem) {
        cartItem = await db.cartItem.update({
            where: {
                id: cartItem.id
            },
            data: {
                amount: cartItem.amount + amount,
            },
        });
    } else {
        cartItem = await db.cartItem.create({
            data: { 
                amount, 
                productId, 
                cartId 
            },
        });
    };
};

// #6. Updates the cart details, including calculating the number of items, the total price, tax, and shipping
// export const updateCart = async (cart: Cart) => {
//     const cartItems = await db.cartItem.findMany({
//         where: {
//             cartId: cart.id,
//         },
//         include: {
//             product: true, // Include the related product
//         },
//     });

//     // Calculate Cart Totals:
//     let numItemsInCart = 0;
//     let cartTotal = 0;

//     for (const item of cartItems) {
//         numItemsInCart += item.amount;
//         cartTotal += item.amount * item.product.price.toNumber();;
//     }

//     // Apply Tax and Shipping:
//     const tax = cart.taxRate * cartTotal;
//     const shipping = cartTotal ? cart.shipping : 0;
//     const orderTotal = cartTotal + tax + shipping;

//     // Update the Cart
//     const currentCart = await db.cart.update({
//         where: {
//             id: cart.id,
//         },
//         data: {
//             numItemsInCart,
//             cartTotal,
//             tax,
//             orderTotal,
//         },
//         include: includeProductClause,
//     });

//     return currentCart;
// };

// #6.1- Refactor Update Card
export const updateCart = async (cart: Cart) => {
    const cartItems = await db.cartItem.findMany({
        where: {
            cartId: cart.id,
        },
        include: {
            product: true, // Include the related product
        },
        orderBy: {
            createdAt: 'asc',
        },
    });

    // Calculate Cart Totals:
    let numItemsInCart = 0;
    let cartTotal = 0;

    for (const item of cartItems) {
        numItemsInCart += item.amount;
        cartTotal += item.amount * item.product.price.toNumber();
    }

    // Apply Tax and Shipping:
    // DEFAULT
    // const tax = cart.taxRate * cartTotal;
    // const shipping = cartTotal ? cart.shipping : 0;
    // const orderTotal = cartTotal + tax + shipping;

    const tax = 0;
    const shipping = 0;
    const orderTotal = cartTotal + tax + shipping;

    // Update the Cart
    const currentCart = await db.cart.update({
        where: {
            id: cart.id,
        },
        data: {
            numItemsInCart,
            cartTotal,
            tax,
            orderTotal,
        },
        include: includeProductClause,
    });

    return { 
        currentCart,
        cartItems: serialize(cartItems), 
    };
};

// # BASE action
export const addToCartAction = async (prevState: any, formData: FormData) => {
    const user = await getAuthUser();

    try {
        const productId = formData.get('productId') as string;
        const amount = Number(formData.get('amount'));
        
        await fetchProduct(productId);

        const cart = await fetchOrCreateCart({ userId: user.id });

        await updateOrCreateCartItem({ productId, cartId: cart.id, amount });

        await updateCart(cart);

    } catch (error) {
        return renderError(error);
    }

    redirect('/cart');
};

// # Remove cartItem in Cart page
export const removeCartItemAction = async (prevState: any, formData: FormData) => {
    const user = await getAuthUser();

    try {
        const cartItemId = formData.get('id') as string;
        const cart = await fetchOrCreateCart({
            userId: user.id,
            errorOnFailure: true,
        });

        await db.cartItem.delete({
            where: {
                id: cartItemId,
                cartId: cart.id,
            },
        });

        await updateCart(cart);
        revalidatePath('/cart')

        return { message: 'Item removed from cart' };
    } catch (error) {
        return renderError(error);
    }
};

export const updateCartItemAction = async ({ 
    amount,
    cartItemId, 
}: {
    amount: number;
    cartItemId: string;
}) => {
    const user = await getAuthUser();

    try {
        const cart = await fetchOrCreateCart({
            userId: user.id,
            errorOnFailure: true,
        });

        await db.cartItem.update({
            where: {
                id: cartItemId,
                cartId: cart.id,
            },
            data: {
                amount,
            },
        });

        await updateCart(cart);
        revalidatePath('/cart');

        return { message: 'Cart updated' };
    } catch (error) {
        return renderError(error);
    }
};

// #7- Order Page
export const createOrderAction = async (prevState: any, formData: FormData) => {
    const user = await getAuthUser();
    let orderId: null | string = null;
    let cartId: null | string = null;

    try {
        const cart = await fetchOrCreateCart({
            userId: user.id,
            errorOnFailure: true,
        });

        cartId = cart.id;

        await db.order.deleteMany({
            where: {
                clerkId: user.id,
                isPaid: false,
            },
        });

        const order = await db.order.create({
            data: {
                clerkId: user.id,
                products: cart.numItemsInCart,
                orderTotal: cart.orderTotal,
                tax: cart.tax,
                shipping: cart.shipping,
                email: user.emailAddresses[0].emailAddress,
            },
        });

        orderId = order.id;
    } catch (error) {
        return renderError(error);
    }

    redirect(`/checkout?orderId=${orderId}&cartId=${cartId}`);
};

export const fetchUserOrders = async () => {
    const user = await getAuthUser();
    const orders = await db.order.findMany({
        where: {
            clerkId: user.id,
            isPaid: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return orders;
};