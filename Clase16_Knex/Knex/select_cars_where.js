const knex = require("./knexConnection")

knex.from("cars").select("name", "price").where("price", ">", "999")
    .then((rows) => {
        console.table(rows)
        // for (const row of rows) {
        //     console.log(`${row[ "name" ]} ${row[ "price" ]}`)
        // }
    }).catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy()
    })