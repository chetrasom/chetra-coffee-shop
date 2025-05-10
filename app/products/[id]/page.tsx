import SubmitReview from "@/components/reviews/SubmitReview"
import BreadCrumb from "@/components/single-products/BreadCrumb"
import ProductReviews from "@/components/reviews/ProductReviews"
import RelatedContainer from "@/components/single-products/RelatedContainer"
import SingleProductContainer from "@/components/single-products/SingleProductContainer"
import { fetchRelatedProducts, fetchSingleProduct, findExistingReview } from "@/utils/actions"
import { auth } from '@clerk/nextjs/server';
import { notFound } from "next/navigation";
import prisma from "@/utils/db"

type SingleProductProp = {
    params: {
        id: string
    }
}

// Generate Static Params (Pre-render Pages)
export async function generateStaticParams() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
        },
    });

    return products.map((product) => ({
        id: product.id,
    }))
}

export async function generateMetadata({ params }: SingleProductProp) {
    const product = await fetchSingleProduct(params.id);

    if (!product) {
        return {
            title: "Product Not Found | Chetra Coffee Shop",
            description: "The product you are looking for does not exist. Browse our premium coffee selection.",
            openGraph: {
                title: "Product Not Found | Chetra Coffee Shop",
                description: "The product you are looking for does not exist. Browse our premium coffee selection.",
                images: [
                    {
                        url: "/images/og-image.jpg", // Replace with your OG image URL
                        alt: "Chetra Coffee Shop - Best Coffee Products Online",
                    },
                ],
            },
        };
    }

    return {
        title: `${product.name} | Chetra Coffee Shop`,
        description: product.longDesc,
        openGraph: {
            title: `${product.name} | Chetra Coffee Shop`,
            description: product.longDesc,
            images: [
                {
                    url: product.imageUrl,
                    alt: product.name,
                },
            ],
        },
    };
}

const SingleProduct = async ({ params }: SingleProductProp) => {
    const { userId } = auth();
    const product = await fetchSingleProduct(params.id);
    const relatedProducts = await fetchRelatedProducts(params.id, product.categoryId);
    const reviewDoesNotExist = userId && !(await findExistingReview(userId, product.id));
    
    if (!product) {
        notFound(); // Show the 404 page if product is not found
    }

    return (
        <section className="section">
            <div className="container">
                <BreadCrumb name={product.name} />
                <SingleProductContainer product={product} />
                <ProductReviews productId={params.id} />
                {reviewDoesNotExist && <SubmitReview productId={product.id} />}
                <RelatedContainer relatedProducts={relatedProducts} />
            </div>
        </section>
    )
}
export default SingleProduct