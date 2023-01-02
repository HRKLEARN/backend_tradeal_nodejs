const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EchangeSchema = new Schema({
  userId: {
    type: String,
  },

  productOwner: {
    type: String,
    required: true,
  },
  
      productId: {
        type: String,
        isRequired : true,
      },
      dateOfTrade: Date,
      
});

module.exports = Echange = mongoose.model("Echange", EchangeSchema);
