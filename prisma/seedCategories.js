const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const file = await fs.readFile(path.join(__dirname, '../data/categories.json'), 'utf-8');
  const categories = JSON.parse(file);

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category
    });
  }
  console.log('✅ Seeded categories');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
