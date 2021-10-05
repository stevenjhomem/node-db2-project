// STRETCH
const cars = [
  {
    vin: "1111111111111",
    make: "toyota",
    model: "prius",
    mileage: 172000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "1111111111112",
    make: "toyota",
    model: "camary",
    mileage: 192000,
    title: "salvage",
    transmission: "automatic",
  },
  {
    vin: "1111111111113",
    make: "honda",
    model: "civic",
    mileage: 12000,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
