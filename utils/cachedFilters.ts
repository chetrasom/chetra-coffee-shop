// /utils/cachedFilters.ts
import db from "@/utils/db";

// Cache for 1 hour (3600 seconds)
export const revalidate = 3600; 

export async function fetchCachedFilters() {
    const [categories, brands, coffeeTypes] = await Promise.all([
        db.category.findMany({ select: { name: true, slug: true } }),
        db.brand.findMany({ select: { name: true, slug: true } }),
        db.coffeeType.findMany({ select: { name: true, slug: true } }),
    ]);

    return { categories, brands, coffeeTypes };
}
