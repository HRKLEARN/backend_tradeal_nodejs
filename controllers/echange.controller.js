const Echange = require("../models/Echange");

exports.post_echange = async (req, res) => {
  try {
    console.log("in add echange");
    const newEchange = await new Echange(req.body);
    newEchange.save();
    res.send(newEchange);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
