const express = require("express");
const Car = require("../cars/cars-model");
const carsRouter = express.Router();

carsRouter.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

carsRouter.get("/:id", async (req, res, next) => {
  res.json(`getting all cars with id ${req.params.id}`);
});

carsRouter.post("/", async (req, res, next) => {
  res.json("posting new car");
});

module.exports = carsRouter;
