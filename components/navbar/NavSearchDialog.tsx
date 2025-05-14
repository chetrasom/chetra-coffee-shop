"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const NavSearchDialog = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');
    const [loading, setLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = useDebouncedCallback((value: string) => {
        setLoading(true);
        
        const params = new URLSearchParams(searchParams);
        
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search')
        }

        router.replace(`/products?${params.toString()}`)
    }, 300);

    useEffect(() => {
        setLoading(false); // loading spinner button after search submit

        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="h-10">
                    <FiSearch className="h-[1.2rem] w-[1.2rem] text-primary dark:text-custom-white" />
                </Button>
            </DialogTrigger>

            <DialogContent className="top-[30%] md:top-[40%] lg:top-[50%] sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="mb-2">Search Products</DialogTitle>
                    <DialogDescription>
                        You can search any products like you want.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input
                            ref={inputRef}
                            type="search"
                            placeholder="Search products..."
                            className="h-12 bg-background flex-1 rounded-lg mb-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch(search)}
                        />
                        <Button 
                            variant="default" 
                            onClick={() => handleSearch(search)} 
                            disabled={loading}
                            className="gap-x-2 items-center"
                        >
                            {loading ? <ReloadIcon className='h-5 w-5 animate-spin' /> : <FiSearch className="w-5 h-5" />}
                            {loading ? "Searching..." : "Search"}
                        </Button>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild className="sr-only">
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default NavSearchDialog