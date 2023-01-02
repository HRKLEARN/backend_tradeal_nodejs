const auth = require("../middlewares/auth");
const express = require("express");
const {
  addProduct,
  getProducts,
  getOneProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/getProducts", auth, getProducts);
router.get("/getProduct/:id", getOneProduct);
router.post("/addProduct", auth, addProduct);
router.delete("/deleteProduct/:id", auth, deleteProduct);
router.put("/editProduct/:id", auth, editProduct);

module.exports = router;
