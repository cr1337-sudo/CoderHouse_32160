const knex = require("./knexConnection");

const cars = [
  { name: "Audi", price: 1000 },
  { name: "Renault", price: 1000 },
  { name: "Fiat", price: 1000 },
  { name: "Hummer", price: 1000 },
  { name: "Toyota", price: 100 },
];
//Seleccionamos la tabla de autos e insertamos 5 filas con el método insert
knex("cars")
  .insert(cars)
  .then((cars) => {
    console.log("data inserted");
    console.log(cars);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
