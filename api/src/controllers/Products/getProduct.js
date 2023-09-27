const { default: axios } = require("axios");
const prisma = require("../../db");
const filterByBrand = require("./filters/filterByBrand");
const filterByPrice = require("./filters/filterByPrice");
//Busca todos los productos.

const getProduct = async (brand, maxPrice = Number.MAX_VALUE, categoryName) => {
  
  let product = await prisma.product.findMany({
    where: {
      brand,
      price: {
        lte: parseFloat(maxPrice),
      },
      categoryrel: {
        name: categoryName
      }
    }
  });
  
  return product.length === 0
    ? "No hay ninguna coincidencia en la base de datos"
    : product;
};

//Busca un producto por su N° de Id:

const getProductById = async (id) => {
  let product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return product;
};

//Busca un producto por su nombre:

const getProductByName = async (name, brand, maxPrice, categoryName) => {

  let product =  prisma.product.findMany({
    where: {
      name: {
        contains: name,
      },
      brand,
      price: {
        lte: maxPrice,
      },
      categoryrel: {
        name: categoryName
      }
    },
  });
  
  product = filterByBrand(product, brand);
  product = filterByPrice(product, price);

  console.log("Producto es: " + product);
  return product;
};

module.exports = { getProduct, getProductById, getProductByName };

// findMany() --> se utiliza para buscar y recuperar varios registros que cumplen con ciertos criterios de consulta de una tabla en la base de datos.

// findUnique() --> se utiliza para buscar y recuperar un único registro de una tabla en la base de datos. A diferencia de findMany(), que recupera múltiples registros
