const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

//Create express app
const app = express();

//Database
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB Database...");
});

//MiddleWare
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const RestaurantsRoute = require("./routes/Restaurants.js");
app.use("/restaurants", RestaurantsRoute);

//Starting server
app.listen(5000, () => console.log("Listening on port 5000"));
