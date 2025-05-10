const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const file = await fs.readFile(path.join(__dirname, '../data/coffeeTypes.json'), 'utf-8');
  const coffeeTypes = JSON.parse(file);

  for (const coffeeType of coffeeTypes) {
    await prisma.coffeeType.upsert({
      where: { slug: coffeeType.slug },
      update: {},
      create: coffeeType
    });
  }
  console.log('✅ Seeded coffee types');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
