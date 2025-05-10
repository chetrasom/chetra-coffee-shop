"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { createUrl } from '@/lib/createUrl';
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Name: A to Z', value: 'name-asc' },
    { label: 'Name: Z to A', value: 'name-desc' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Best Seller', value: 'best-seller' },
];  

const Sorting = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const current = searchParams.get('sort') || 'newest';

    const handleChange = (value: string) => {
        const url = createUrl(searchParams, { sort: value });
        router.replace(url);
    };

    return (
        <div className="flex items-center gap-x-2.5">
            <Label htmlFor="sort" className="hidden md:block">Sort by</Label>
            <Select value={current} onValueChange={handleChange}>
                <SelectTrigger className="w-[180px] md:w-[190px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}
export default Sorting