const prisma = require("../../db");

const createProduct = async (name, image, brand, description, category, price) => {
  const product = await prisma.product.create({
    data: {
      name,
      image,
      brand,
      description,
      category,
      price: parseFloat(price),
    },
  });
  return product;
};

module.exports = createProduct;
