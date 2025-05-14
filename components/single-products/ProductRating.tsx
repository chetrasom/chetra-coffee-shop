import { fetchProductRating } from '@/utils/actions';
import { Button } from '../ui/button';
import { RiStarFill } from 'react-icons/ri';

const ProductRating = async ({ productId }: { productId: string }) => {
    const { rating, count } = await fetchProductRating(productId);
    const countValue = `(${count}) Reviews`;

    return (
        <div>
            <Button 
                variant="ghost" 
                className="btn-default flex items-center gap-x-1"
            >
                {rating} <RiStarFill className="text-amber-400 -mt-0.5" /> {countValue}
            </Button>
        </div>
    )
}
export default ProductRating