import { normalize, denormalize, schema } from "normalizr";

const blogpost = {
  id: "1",
  title: "My blog post",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: "1",
    name: "John Doe",
  },
  comments: [
    {
      id: "1",
      author: {
        id: "2",
        name: "Rob",
      },
      content: "Nice post!",
    },
    {
      id: "2",
      author: {
        id: "4",
        name: "Jane",
      },
      content: "I totally agree with you!",
    },
  ],
};

// Definimos un esquema de usuarios (autores y comentadores)
const authorSchema = new schema.Entity("authors");

// Definimos un esquema de comentadores
const commentSchema = new schema.Entity("comments", {
  author: authorSchema,
});

// Definimos un esquema de artículos
const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema],
});


/* ---------------------------------------------------------------------------------------- */
import { inspect } from 'util';

function print(objeto) {
  console.log(inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO ORIGINAL --------------- ')
print(blogpost)
console.log(JSON.stringify(blogpost).length)

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedBlogpost = normalize(blogpost, postSchema);
print(normalizedBlogpost)
console.log(JSON.stringify(normalizedBlogpost).length)
// 
console.log(' ------------- OBJETO DENORMALIZADO --------------- ')
const denormalizedBlogpost = denormalize(normalizedBlogpost.result, postSchema, normalizedBlogpost.entities);
print(denormalizedBlogpost)
console.log(JSON.stringify(denormalizedBlogpost).length)
