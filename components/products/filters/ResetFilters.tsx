'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { createUrl } from '@/lib/createUrl';
import { Button } from '@/components/ui/button';

const ResetFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleReset = () => {
        const url = createUrl(searchParams, {
            category: undefined,
            brand: undefined,
            coffeeType: undefined,
        });
    
        router.replace(url);
    };

    return (
        <Button 
            variant="destructive" 
            onClick={handleReset} 
            className='capitalize font-poppins font-bold rounded-lg text-base'
        >
            Reset Filters
        </Button>
    )
}
export default ResetFilters