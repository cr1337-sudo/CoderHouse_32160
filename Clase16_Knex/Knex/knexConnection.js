const { options } = require("./mysql");
const knex = require("knex")(options);

module.exports = knex;

