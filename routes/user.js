const express = require("express");
const { register, login, getUser } = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const {validator } = require("../middlewares/validator");
const router = express.Router();

router.post("/register",validator, register);
router.post("/login", login);
router.get("/getUser", auth, getUser);

module.exports = router;
