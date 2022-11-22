const knex = require("./knexConnection")

knex.schema
  .createTable("cars", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("price");
  })
  .then(() => console.log("Table created"))
  .catch((e) => console.log(e))
  .finally(() => {
    knex.destroy();
  });

  //Ver forma en SQL!!