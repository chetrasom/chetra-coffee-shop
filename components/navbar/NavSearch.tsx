"use client";

import { Input } from "../ui/input"
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { createUrl } from "@/lib/createUrl";
import { FiSearch } from "react-icons/fi";

const NavSearch = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

    // const handleSearch = useDebouncedCallback((value: string) => {
    //     const params = new URLSearchParams(searchParams);
        
    //     if (value) {
    //         params.set('search', value);
    //     } else {
    //         params.delete('search')
    //     }

    //     replace(`/products?${params.toString()}`)
    // }, 300);

    //  # Replace with createUrl()
    const handleSearch = useDebouncedCallback((value: string) => {
        const url = createUrl(searchParams, {
            search: value,
        });

        replace(url);
    }, 300);

    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams]);

    return (
        <div className="relative max-w-md w-full">
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <FiSearch className="w-5 h-5 text-primary" />
            </div>
            <Input 
                type="search"
                placeholder="Explore coffee flavors and more..."
                className="h-12 bg-background pl-11"
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearch(e.target.value)
                }}
            />
        </div>
    )
}
export default NavSearch