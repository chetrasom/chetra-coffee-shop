import { Skeleton } from '../ui/skeleton';
import { Card, CardContent } from '../ui/card';

const LoadingContainer = () => {
    return (
        <div className='container pb-16'>
            <div className="grid grid-cols-1 gap-x-2.5 gap-y-6 mt-12 md:grid-cols-3 md:gap-5 lg:grid-cols-3 lg:gap-8">
                <LoadingProduct />
                <LoadingProduct />
                <LoadingProduct />
            </div>
        </div> 
    )
};

function LoadingProduct() {
    return (
      <Card>
            <CardContent className='p-4'>
                <Skeleton className='h-48 w-full bg-muted' />
                <Skeleton className='h-4 w-3/4 mt-4 bg-muted' />
                <Skeleton className='h-4 w-1/4 mt-4 bg-muted' />
            </CardContent>
      </Card>
    );
};
export default LoadingContainer