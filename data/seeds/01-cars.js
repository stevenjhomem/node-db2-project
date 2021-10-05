// STRETCH
const cars = [
  {
    vin: "2D8HN44H68R732700",
    make: "toyota",
    model: "prius",
    mileage: 172000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "1G4HJ5EM4AU112699",
    make: "toyota",
    model: "camary",
    mileage: 192000,
    title: "salvage",
    transmission: "automatic",
  },
  {
    vin: "1J4AA2D19BL653874",
    make: "honda",
    model: "civic",
    mileage: 12000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
