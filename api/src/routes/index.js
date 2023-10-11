const { Router } = require("express");
const {
  usersGet,
  usersEdit,
  userLogin,
  userGetById,
  usersCreate,
  userDelete,
  userGoogleLogin,
  userGoogleLoginCredentials,
  changePassword
} = require("../handlers/Users/userHandler");
const {
  createSale,
  getAllSales,
  getSaleById,
} = require("../handlers/Sales/saleHandler");
const {
  createNewProduct,
  deleteAProduct,
  editAProduct,
  getAProduct,
  getProductId,
  addProductRating
} = require("../handlers/Products/ProductHandler");

const router = Router();

//////////////////////////////////////// User routes
router.get("/users", usersGet);
router.put("/users/:id", usersEdit);
router.get("/users/:id", userGetById);
router.post("/users", usersCreate);
router.post("/login", userLogin);
router.get("/login-google-init", userGoogleLogin)
router.post("/login-google", userGoogleLoginCredentials);
router.delete("/users/:id", userDelete);
router.put("/change-password", changePassword);

///////////////////////////////////////// Sales routes
router.get("/success", (req, res) =>
  res.status(200).send("Payment was successful")
);
router.get("/pending", (req, res) => res.status(200).send("Pending..."));

router.get("/sale", getAllSales);
router.get("/sale/:id", getSaleById);
router.post("/sale", createSale);

///////////////////////////////////////// Products routes
router.post("/product", createNewProduct);
router.delete("/product/:id", deleteAProduct);
router.put("/product/:id", editAProduct);
router.get("/product", getAProduct);
router.get("/product/:id", getProductId);
router.post("/rate/:id", addProductRating)
/////////////////////////////////////////

module.exports = router;
