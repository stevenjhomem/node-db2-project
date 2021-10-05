const express = require("express");
const Car = require("../cars/cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
} = require("../cars/cars-middleware");

const carsRouter = express.Router();

carsRouter.get("/", async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

carsRouter.get("/:id", checkCarId, async (req, res) => {
  res.json(req.car);
});

carsRouter.post(
  "/",
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
  async (req, res, next) => {
    try{
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar);
    }catch (err) {
        next(err)
    }
  }
);

module.exports = carsRouter;
