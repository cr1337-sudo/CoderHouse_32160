const express = require("express");
const { Router } = express;
const path = require("path");

const app = express();
const routerPersonas = Router();

let personas = [{ name: "Juan" }];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "../views")));
// app.use("/estaticos", express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("index.html");
});

routerPersonas.get("/", (req, res) => {
  res.json(personas);
});

routerPersonas.post("/", (req, res) => {
  personas.push(req.body);
  res.json(personas);
});

app.use("/personas", routerPersonas);

app
  .listen(8000, () => {
    console.log("Server running");
  })
  .on("error", () => {
    console.log("Ha ocurrido un error");
  });
