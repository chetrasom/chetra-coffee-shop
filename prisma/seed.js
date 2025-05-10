const { PrismaClient } = require('@prisma/client');
const fs = require('fs/promises');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.join(__dirname, './products.json');
  const file = await fs.readFile(dataPath, 'utf-8');
  const products = JSON.parse(file);

  for (const product of products) {
    const category = await prisma.category.findUnique({
      where: { slug: product.category }
    });

    const brand = await prisma.brand.findUnique({
      where: { slug: product.brand }
    });

    const type = await prisma.coffeeType.findUnique({
      where: { slug: product.type }
    });

    if (!category || !brand || !type) {
      console.warn(`Skipping product due to missing relation:`, product.name);
      continue;
    }

    await prisma.product.create({
      data: {
        name: product.name,
        shortDesc: product.shortDesc,
        longDesc: product.longDesc,
        imageUrl: product.imageUrl,
        price: product.price,
        stockQuantity: product.stockQuantity,
        size: product.size,
        bestSeller: product.bestSeller,
        clerkId: product.clerkId,
        categoryId: category.id,
        brandId: brand.id,
        typeId: type.id
      }
    });
  }
}

main()
  .then(() => console.log('✅ Seeding complete'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
