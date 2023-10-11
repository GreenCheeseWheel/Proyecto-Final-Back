const createProduct = require("../../controllers/Products/createProduct");
const deleteProduct = require("../../controllers/Products/deleteProduct");
const editProduct = require("../../controllers/Products/editProduct");
const addStock = require("../../controllers/Products/addStock");
const {
  getProduct,
  getProductById,
  getProductByName,
} = require("../../controllers/Products/getProduct");
const addRating = require("../../controllers/Products/addRating");


//Creacion de un nuevo producto:

const createNewProduct = async (req, res) => {
  const { name, image, brand, category, price, stock } = req.body;

  try {
    const product = await createProduct(name, image, brand, category, +price, +stock);
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


const addProductRating = async (req, res) => {
  const {id} = req.params;
  const {userId, rating} = req.body;

  try
  {
    const product = await addRating(+id, userId, rating);

    res.status(200).json(product);

  }
  catch(error)
  {
    res.status(500).json({error: error.message});
  }

}

//Editar un producto:

const editAProduct = async (req, res) => {
  const { id } = req.params;
  const { add } = req.query;
  const { name, image, brand, category, price, stock } = req.body;

  try {
    if(!add)
    {
      const product = await editProduct(+id, name, image, brand, category, +price, +stock);
      return res.status(201).json(product);
    }
    
    const product = await addStock(+id, +stock);
    return res.status(201).json(product);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



//Obtener producto por nombre:

const getAProduct = async (req, res) => {
  try {
    const { name, brand } = req.query;
    if (!name) {
      const product = await getProduct(brand);
      res.status(200).json(product);
    } else {
      const product = await getProductByName(name, brand);
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
  const { id, brand } = req.params;
  try {
    const product = await getProductById(+id, brand);
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
  addProductRating
};
