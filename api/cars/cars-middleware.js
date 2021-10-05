const Car = require("../cars/cars-model");

const checkCarId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await Car.getById(id);
    if (!car) {
      res.status(404).json({ message: "No car with that Id" });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
};
