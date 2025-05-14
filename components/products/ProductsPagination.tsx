"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "@/lib/createUrl";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Button } from "../ui/button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

const generatePages = (current: number, total: number, delta = 2) => {
    const pages: (number | "...")[] = [];
    let lastPage = 0;
  
    for (let i = 1; i <= total; i++) {
        if (
            i === 1 ||
            i === total ||
            (i >= current - delta && i <= current + delta)
        ) {
            if (lastPage && i - lastPage > 1) {
                pages.push("...");
            }
            pages.push(i);
            lastPage = i;
        }
    }
  
    return pages;
};

const ProductsPagination = ({ currentPage, totalPages }: PaginationProps) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const goToPage = (page: number) => {
        const url = createUrl(searchParams, { page: String(page) });
        router.push(url);
    };
    
    const pageNumbers = generatePages(currentPage, totalPages);

    return (
        <div className="py-10 flex justify-center">
            <div className="flex gap-x-1.5">
                {/* Prev */}
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="text-base"
                >
                    <IoIosArrowBack />
                </Button>

                {/* Page Numbers */}
                {pageNumbers.map((page, index) =>
                    page === "..." ? (
                        <Button key={index} size="icon" variant="ghost" disabled>
                            ...
                        </Button>
                    ) : (
                        <Button
                            key={page}
                            size="icon"
                            variant={page === currentPage ? "default" : "outline"}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </Button>
                    )
                )}

                {/* Next */}
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="text-base"
                >
                    <IoIosArrowForward />
                </Button>
            </div>
        </div>
    )
}
export default ProductsPagination;