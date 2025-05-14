"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { createUrl } from "@/lib/createUrl";
import { Button } from "@/components/ui/button";
import BorderGradient from "@/components/BorderGradient";

interface FilterGroupProps {
    title: string;
    filters: { name: string; slug: string }[];
    queryKey: string;
}

const FilterGroup = ({ title, filters, queryKey }: FilterGroupProps) => {
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
        <div className="mb-5">
            <div className="mb-5">
                <h4 className="text-primary font-bold uppercase text-xl">{title}</h4>
                <div className="w-24 mt-0.5">
                    <BorderGradient />
                </div>
            </div>

            <div className="flex gap-2 flex-wrap">
                {filters.map((filter) => {
                    return (
                        <Button
                            key={filter.slug}
                            onClick={() => handleClick(filter.slug)}
                            variant={filter.slug === currentValue ? 'default' : 'outline'}
                            color={filter.slug === currentValue ? 'black' : 'gray'}
                            className="btn-default px-3"
                        >
                            {filter.name}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}
export default FilterGroup