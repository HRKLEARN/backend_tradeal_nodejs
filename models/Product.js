const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  description: String,
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageUrl: String,
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rate : Number,
  dateOfCreation : Date,
  owner: {
    type: String,
    required: true,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
