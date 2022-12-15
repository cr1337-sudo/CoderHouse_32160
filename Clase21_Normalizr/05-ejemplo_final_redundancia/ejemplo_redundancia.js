import {schema, normalize, denormalize } from "normalizr";
import data from "./data.js";
// Definimos un esquema de usuarios (autores y comentadores)
const user = new schema.Entity('users');

// Definimos un esquema de comentadores
const comment = new schema.Entity('comments', {
  commenter: user
});

// Definimos un esquema de artículos
const post = new schema.Entity('posts', {
  author: user,
  comments: [ comment ]
});

// Definimos un esquema de posts (array de artículos)
const blog = new schema.Entity('blogs', {
  posts: [ post ]
})

/* ---------------------------------------------------------------------------------------- */
import util from "util"

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO ORIGINAL --------------- ')
print(data)
console.log(JSON.stringify(data).length)


console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedData = normalize(data, blog);
print(normalizedData)
console.log(JSON.stringify(normalizedData).length)


// console.log(' ------------- OBJETO DENORMALIZADO --------------- ')
// const denormalizedData = denormalize(normalizedData.result, blog, normalizedData.entities);
// print(denormalizedData)
// console.log(JSON.stringify(denormalizedData).length)
