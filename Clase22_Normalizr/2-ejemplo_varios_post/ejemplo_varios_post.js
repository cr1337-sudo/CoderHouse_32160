import { denormalize, normalize, schema } from "normalizr";
import blogposts from "./blogposts.json" assert {type:"json"}

const authorSchema = new schema.Entity("authors");
const commentSchema = new schema.Entity("comments",{
  author:authorSchema
});

const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema],
});

const blogSchema= new schema.Entity("blog",{
  posts:[postSchema]
}

)

/* ---------------------------------------------------------------------------------------- */
import util from "util"

function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

// console.log(' ------------- OBJETO ORIGINAL --------------- ')
// print(blogposts)
// console.log(JSON.stringify(blogposts).length)


console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedBlogposts = normalize(blogposts,blogSchema);
print(normalizedBlogposts)
console.log(JSON.stringify(normalizedBlogposts).length)

console.log(' ------------- OBJETO DENORMALIZADO --------------- ')
const denormalizedBlogposts = denormalize(normalizedBlogposts.result,blogSchema, normalizedBlogposts.entities);
print(denormalizedBlogposts)
console.log(JSON.stringify(denormalizedBlogposts).length)
