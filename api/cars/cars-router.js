const express = require("express");

const carsRouter = express.Router();

carsRouter.get("/", async (req, res, next) => {
  res.json("getting all cars");
});

carsRouter.get("/:id", async (req, res, next) => {
  res.json(`getting all cars with id ${req.params.id}`);
});

carsRouter.post("/", async (req, res, next) => {
  res.json("posting new car");
});

module.exports = carsRouter;
