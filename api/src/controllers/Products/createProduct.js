const prisma = require("../../db");

const createProduct = async (name, image, brand, category, price, stock) => {
  const product = await prisma.product.create({
    data: {
      name,
      image,
      brand,
      category,
      stock,
      price,
    },
  });
  return product;
};

module.exports = createProduct;
