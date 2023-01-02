const express = require("express");
const auth = require("../middlewares/auth");

const {
  getGroupes,
  getAllGroupes,
  getOneGroupe,
  addGroupe,
  deleteGroupe,
} = require("../controllers/groupe.controller");

const router = express.Router();

router.get("/getGroupes/:id", auth, getGroupes);
router.get("/getAllGroupes", auth, getAllGroupes);
router.get("/getGroupe/:id", auth, getOneGroupe);
router.post("/addGroupe", auth, addGroupe);
router.delete("/deleteGroupe/:id", auth, deleteGroupe);

module.exports = router;
