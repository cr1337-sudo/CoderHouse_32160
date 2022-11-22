
const knex = require("./knexConnection")

knex.from("cars").where("price","<=", "5000").update({ price: 5000 })
    .then((count) => {
        console.log(`${count} car/s updated`)
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })