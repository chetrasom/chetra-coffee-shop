import Image from "next/image"
import Rating from "./Rating"
import Comment from "./Comment"
import Link from "next/link";

type ReviewCardProps = {
    reviewInfo: {
        comment: string;
        rating: number;
        name: string;
        image: string;
        productId?: string;
    };
    children?: React.ReactNode;
};

const ReviewCard = ({ reviewInfo, children }: ReviewCardProps) => {
    const id = reviewInfo.productId;
    return (
        <div className="relative border rounded-lg p-4 bg-muted">
            <Link href={`/products/${id}`} className="bg-red-400 space-y-4 md:space-y-5">
                <div className="flex items-center gap-x-2.5">
                    <figure className="relative bg-muted w-16 h-16 rounded-full ring-1 ring-primary/50 overflow-hidden">
                        <Image 
                            src={reviewInfo.image}
                            alt={reviewInfo.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            className="w-full h-full object-contain"
                        />
                    </figure>
                    <div className="space-y-0.5">
                        <h5 className="text-primary font-semibold tracking-wide capitalize w-[12rem] md:w-[13rem] lg:w-[16rem]">
                            {reviewInfo.name}
                        </h5>
                        <Rating rating={reviewInfo.rating} />
                    </div>
                </div>
                <Comment comment={reviewInfo.comment} />
            </Link>

            <div className="absolute top-3 right-3">
                {children}
            </div>
        </div>
    )
}
export default ReviewCard