const knex = require("./knexConnection")

knex.from("cars").where("price", "=", "1000").del()
    .then((count) => console.log(`${count} matching car/s deleted`))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })