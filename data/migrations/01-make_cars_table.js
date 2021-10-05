exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");

    tbl.string("vin", 17).notNullable().unique();

    tbl.string("make", 128).notNullable();

    tbl.string("model", 128).notNullable();

    tbl.numeric("mileage").unSigned().notNullable();

    tbl.string("title", 128);

    tbl.string("transmission", 128);
  });
};
