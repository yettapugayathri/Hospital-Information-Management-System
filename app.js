const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());
// link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log(`hello my middleware`);
  next();
};

// app.get("/", (req, res) => {
//   res.send(`Hello world from the server`);
// });

app.get("/about", middleware, (req, res) => {
  res.send(`Hello about world from the server`);
});
app.post("/Login", (req, res) => {
  console.log("Hi");
  const val = req.body;
  console.log(val);
});
app.listen(PORT, () => {
  console.log(`server is running at port no`,PORT);
});
