import { FaStar, FaRegStar } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }: { rating: number }) => {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);

    return (
        <div className="flex justify-start gap-x-0.5">
            {stars.map((isFilled, index) => {
                const className = `w-4 h-4 ${ isFilled ? 'text-amber-400' : 'text-gray-400' }`;

                return (
                    isFilled ? (
                        <AiFillStar className={className} key={index} />
                    ) : (
                        <AiOutlineStar className={className} key={index} />
                    )
                )
            })}
        </div>
    )
}
export default Rating