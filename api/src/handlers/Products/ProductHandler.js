const createProduct = require("../../controllers/Products/createProduct");
const deleteProduct = require("../../controllers/Products/deleteProduct");
const editProduct = require("../../controllers/Products/editProduct");
const {
  getProduct,
  getProductById,
  getProductByName,
} = require("../../controllers/Products/getProduct");

//Creacion de un nuevo producto:

const createNewProduct = async (req, res) => {
  const { name, image, brand, description, category, price, stock } = req.body;

  // Aca no parseo porque vienen del body como deben ser (SUPUESTAMENTE)
  try {
    const product = await createProduct(name, image, brand, description, category, price, stock);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Borrar un producto:

const deleteAProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await deleteProduct(+id);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Editar un producto:

const editAProduct = async (req, res) => {
  const { id } = req.params;
  const { name, image, brand, category, price, stock } = req.body;

  try {
    const product = await editProduct(+id, name, image, brand, category, price, stock);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Obtener todos los productos:

const getAProduct = async (req, res) => {
  try {
    // Debo parsear el price porque viene de la url como query
    const { name, brand, price, category, sort } = req.query;
    if (!name) {
      const product = await getProduct(brand, +price, category, sort);
      res.status(200).json(product);
    } else {
      const product = await getProductByName(name, brand, +price, sort);
      res.status(200).json(product);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "No se logró encontrar el producto solicitado" });
  }
};

//Obtener una producto por su Id:

const getProductId = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(+id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Producto no encontrado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "No se logró encontrar el producto solicitado" });
  }
};

module.exports = {
  createNewProduct,
  deleteAProduct,
  editAProduct,
  getAProduct,
  getProductId,
};
