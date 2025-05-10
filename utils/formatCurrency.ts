import { Decimal } from "@prisma/client/runtime/library";

// # With Int
// export const formatCurrency = (amount: number | null) => {
//     const value = amount || 0;
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'USD',
//     }).format(value);
// };

// # With Decimal
export const formatCurrency = (amount: any) => {
    const value =
      typeof amount === 'object' &&
      amount !== null &&
      typeof amount.toNumber === 'function'
        ? amount.toNumber()
        : amount || 0;
  
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};