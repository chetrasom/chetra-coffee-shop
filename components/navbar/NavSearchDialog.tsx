"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
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
    const { replace } = useRouter();
    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search')
        }

        replace(`/products?${params.toString()}`)
    }, 300);

    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" >
                    <FiSearch className="h-[1.2rem] w-[1.2rem] text-custom-green dark:text-custom-white" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="mb-2">Search Products</DialogTitle>
                    <DialogDescription>
                        You can search any products like you want.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="h-12 bg-background"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                handleSearch(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
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