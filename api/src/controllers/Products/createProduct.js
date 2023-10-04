const prisma = require("../../db");

const createProduct = async (name, image, brand, description, category, price, stock) => {
  const product = await prisma.product.create({
    data: {
      name,
      image,
      brand,
      description,
      category,
      stock,
      price: parseFloat(price),
      
    },
  });
  return product;
};

module.exports = createProduct;
