// Prisma gives you Decimal, Date, etc. — not normal types.
// JSON.stringify converts everything to plain objects (like number, string).
// JSON.parse returns a clean object that is safe for client component.

export function serialize<T extends Record<string, any>>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }
  