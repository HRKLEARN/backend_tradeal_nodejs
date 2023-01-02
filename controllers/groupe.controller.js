const Groupe = require("../models/Groupe");

exports.getGroupes = async (req, res) => {
  try {
    console.log("in get groupes");
    const groupes = await Groupe.find({ owner_Id: req.params.id });
    res.send(groupes);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};
exports.getAllGroupes = async (req, res) => {
  try {
    const groupes = await Groupe.find();
    res.send(groupes);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.getOneGroupe = async (req, res) => {
  try {
    const groupe = await Groupe.findById(req.params.id);
    res.send(groupe);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.addGroupe = async (req, res) => {
  try {
    console.log("in add dish");
    const newGroupe = await new Groupe(req.body);
    newGroupe.save();
    res.send(newGroupe);
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

exports.deleteGroupe = async (req, res) => {
  try {
    const deletedGroupe = await Groupe.findByIdAndDelete(req.params.id);
    res.send({ msg: `${deletedGroupe.name} was successfully deleted` });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};



