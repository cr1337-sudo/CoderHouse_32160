const express = require("express");
const { Router } = express;

const app = express();
const routerPersonas = Router();
const routerMascotas = Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let personas = [{ nombre: "Juan", apellido: "Perez", edad: 21 }];

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
