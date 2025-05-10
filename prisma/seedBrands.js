const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const file = await fs.readFile(path.join(__dirname, '../data/brands.json'), 'utf-8');
  const brands = JSON.parse(file);

  for (const brand of brands) {
    await prisma.brand.upsert({
      where: { slug: brand.slug },
      update: {},
      create: brand
    });
  }
  console.log('✅ Seeded brands');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
