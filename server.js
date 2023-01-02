const express = require("express");
const app = express();

const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const product = require("./routes/product");
const echange = require("./routes/echange");
const groupe = require("./routes/groupe");
connectDB();

app.use(express.json());

app.use("/user", user);
app.use("/product", product);
app.use("/echange", echange);
app.use("/groupe", groupe);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server running on port ${PORT}...`)
);
