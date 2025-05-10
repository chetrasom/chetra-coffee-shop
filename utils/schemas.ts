import { z, ZodSchema } from 'zod';

// # Validate with Zod Schema
export function validateWithZodSchema<T>(
    schema: ZodSchema<T>,
    data: unknown
): T {
    const result = schema.safeParse(data);
    if (!result.success) {
      const errors = result.error.errors.map((error) => error.message);
      throw new Error(errors.join(','));
    }
    return result.data;
};

// # Review Schema
export const reviewSchema = z.object({
    productId: z.string().refine((value) => value !== '', {
        message: 'Product ID cannot be empty',
    }),
    authorName: z.string().refine((value) => value !== '', {
        message: 'Author name cannot be empty',
    }),
    authorImageUrl: z.string().refine((value) => value !== '', {
        message: 'Author image URL cannot be empty',
    }),
    rating: z.coerce
        .number()
        .int()
        .min(1, { message: 'Rating must be at least 1' })
        .max(5, { message: 'Rating must be at most 5' }),
    comment: z
        .string()
        .min(10, { message: 'Comment must be at least 10 characters long' })
        .max(1000, { message: 'Comment must be at most 1000 characters long' }),
});