const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const newProduct = await new Product(req.body);
    newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
exports.getProducts = async (req, res) => {
  try {
    console.log("in get product");
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.log("error");
    res.status(500).json({ errors: error.message });
  }
};
exports.getOneProduct = async (req, res) => {
  try {
    const pruduct = await Product.findById(req.params.id);
    res.send(pruduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    console.log("in delete product");
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ msg: `${deletedProduct.name} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const editedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.send(editedProduct);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
