"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { createUrl } from "@/lib/createUrl";
import { Button } from "@/components/ui/button";
import BorderGradient from "@/components/BorderGradient";

interface FilterMobileProps {
    title: string;
    filters: { name: string; slug: string }[];
    queryKey: string;
}

const FilterMobile = ({ title, filters, queryKey }: FilterMobileProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentValue = searchParams.get(queryKey);
    
    const handleClick = (slug: string) => {
        const url = createUrl(searchParams, {
            [queryKey]: currentValue === slug ? undefined : slug,
        });
      
        router.replace(url);
    };

    return (
        <div>
            <div className="mb-2.5">
                <h4 className="text-primary font-bold uppercase">{title}</h4>
                <div className="w-24 mt-0.5">
                    <BorderGradient />
                </div>
            </div>

            <div className="flex gap-3 flex-wrap">
                {filters.map((filter) => {
                    return (
                        <Button
                            key={filter.slug}
                            onClick={() => handleClick(filter.slug)}
                            variant={filter.slug === currentValue ? 'default' : 'secondary'}
                            color={filter.slug === currentValue ? 'black' : 'gray'}
                            className="text-sm capitalize transition h-8 px-2"
                        >
                            {filter.name}
                        </Button>
                    )
                })}
            </div>

        </div>
    )
}
export default FilterMobile