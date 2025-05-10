import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions"
import BorderGradient from "@/components/BorderGradient"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MdOutlineKeyboardReturn } from "react-icons/md"
import { LiaCommentSolid } from "react-icons/lia";
import ReviewCard from "@/components/reviews/ReviewCard"
import FormContainer from "@/components/form/FormContainer"
import { IconButton } from "@/components/form/Buttons"

const ReviewsPage = async () => {
    const reviews = await fetchProductReviewsByUser();

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
                        Your Reviews
                    </h2>

                    <BorderGradient />
                </div>

                {reviews.length === 0 ? (
                    <div className="bg-muted rounded-lg overflow-hidden p-5 flex flex-col items-center justify-center gap-y-5">
                        <h2 className="h2 leading-loose text-amber-500">
                            You have no reviews yet.
                        </h2>
                        <LiaCommentSolid className="w-10 h-10 text-amber-500" />
                        <Button asChild className="h-11">
                            <Link href="/products" className="flex items-center gap-x-2">
                                <MdOutlineKeyboardReturn className="w-4 h-4" />Continue shopping
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {reviews.map((review) => {
                            const { comment, rating } = review;
                            const { imageUrl = "/placeholder.jpg", name = "Unknown", id: productId } = review.product ?? {};

                            const reviewInfo = {
                                comment: comment,
                                rating: rating,
                                image: imageUrl || '',
                                name,
                                productId,
                            };

                            return (
                                <ReviewCard key={review.id} reviewInfo={reviewInfo}>
                                    <DeleteReview reviewId={review.id} />
                                </ReviewCard>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
};

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
    const deleteReview = deleteReviewAction.bind(null, { reviewId });
    return (
        <FormContainer action={deleteReview}>
            <IconButton actionType='delete' />
        </FormContainer>
    );
};

export default ReviewsPage;