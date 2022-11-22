
const knex = require("./knexConnection")

knex.from("cars").select("*")
    .then((rows) => {
        console.table(rows)
        // for (const row of rows) {
        //      console.log(`${row[ "id" ]} ${row[ "name" ]} ${row[ "price" ]}`)
        // }
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })