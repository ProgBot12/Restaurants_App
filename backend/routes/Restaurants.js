const express = require("express");
const router = express.Router();
const Restaurant = require("../models/Restaurants.js");

// Get all restaurants
router.get("/", async (req, res) => {
  const restaurants = await Restaurant.find();

  res.json(restaurants);
});

//Get a specific restaurant
router.get("/get/:id", async (req, res) => {
  const r = await Restaurant.findById({ _id: req.params.id });

  res.json(r);
});

//Get specific number of restaurants
router.get("/:number", async (req, res) => {
  const r = await Restaurant.find().limit(req.params.number);

  res.json(r);
});

//Add new restaurant
router.post("/add", async (req, res) => {
  const newRestaurant = new Restaurant({
    address: req.body.address,
    cuisine: req.body.cuisine,
    grades: req.body.grades,
    name: req.body.name,
    restaurant_id: req.body.restaurant_id,
  });

  const savedRestaurant = await newRestaurant.save();

  res.json(savedRestaurant);
});

//Update a restaurant
router.patch("/update/:id", async (req, res) => {
  const r = await Restaurant.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.json(r);
});

//Delete restaurant
router.get("/delete/:id", async (req, res) => {
  const result = await Restaurant.findByIdAndDelete({ _id: req.params.id });
  res.json(result);
});

module.exports = router;
