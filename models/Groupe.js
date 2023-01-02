const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupeSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: String,
  category: {
    type: String,
    required: true,
  },
  owner_id:String,
  rate: Number,
  nbParticipants :Number,
});

module.exports = Groupe = mongoose.model("Groupe", GroupeSchema);
