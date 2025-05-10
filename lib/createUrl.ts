import { ReadonlyURLSearchParams } from 'next/navigation';

// # create url query string
// # 1- searchParams parameter: this comes from useSearchParams() — it holds the current query string values from the URL.
// # 2- updates parameter: this is an object that holds the new key-value pairs you want to update or add to the query string. If the value is undefined, it will remove the key.

export const createUrl = (
    searchParams: ReadonlyURLSearchParams,
    updates: Record<string, string | undefined>
) => {
    const params = new URLSearchParams(searchParams.toString());
  
    Object.entries(updates).forEach(([key, value]) => {
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
    });
  
    return `/products?${params.toString()}`;
};