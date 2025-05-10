// lib/formatCategory.ts

export const formatCategory = (cat: string) => {
    return cat
      // .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  };
  