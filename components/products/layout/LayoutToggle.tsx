"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/createUrl";

const LayoutToggle = () => {
    const searchParams = useSearchParams();
    const layout = searchParams.get('layout') || 'grid'; // get value "grid | list"

    const gridQueryUrl = createUrl(searchParams, { layout: "grid" });
    const listQueryUrl = createUrl(searchParams, { layout: "list" });
    
    return (
        <div className="flex items-center gap-x-3 text-secondary-foreground">
            <Button 
                aria-label="grid_view" 
                variant={layout === 'grid' ? 'default':'outline'}
                size="icon"
                asChild
            >
                <Link href={gridQueryUrl}>
                    <TfiLayoutGrid2 className="w-4 h-4" />
                </Link>
            </Button>

            <Button 
                aria-label="list_view" 
                variant={layout === 'list' ? 'default':'outline'}
                size="icon"
                asChild
            >
                <Link href={listQueryUrl}>
                    <FaList className="w-4 h-4" />
                </Link>
            </Button>
        </div>
    )
}
export default LayoutToggle