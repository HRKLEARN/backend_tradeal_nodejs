const express = require("express");
const { post_echange } = require("../controllers/echange.controller");

const router = express.Router();
const isAuth = require("../middlewares/auth");

// fetch the echanges of a specific user
//router.get("/get_echange/:id");

// make a new Echange
router.post("/postEchange", isAuth, post_echange);

module.exports = router;
