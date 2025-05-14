import { fetchProductReviews } from "@/utils/actions"
import BorderGradient from "../BorderGradient"
import ReviewCard from "./ReviewCard";

const ProductReviews = async ({ productId }: { productId: string }) => {
    const reviews = await fetchProductReviews(productId);

    return (
        <div className="mt-16">
            <div>
                {reviews.length > 0 && (
                    <div className="mb-6 lg:mb-10">
                        <h2 className="capitalize font-bold text-2xl text-primary pb-2">
                            product reviews
                        </h2>
                        <BorderGradient />
                    </div>
                )}
                
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
                    {reviews.map((review) => {
                        const { comment, rating, authorImageUrl, authorName } = review;
                        const reviewInfo = {
                            comment,
                            rating,
                            image: authorImageUrl,
                            name: authorName,
                        };

                        return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
                    })}
                </div>
            </div>
        </div>
    )
}
export default ProductReviews