require("dotenv/config")
const express = require("express");
const logger = require("./logger");
const app = express();
const port = 8080;

app.get("/sumar", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);

  if (isNaN(n1) || isNaN(n2)) {
    logger.error("Parámetros incorrectos");
    return res.send("Parámetros de entrada no válidos");
  }

  logger.info("Los parámetros fueron correctos");
  return res.send(`La suma de n1 + n2 es ${n1 + n2}`);
});

app.all("*", (req, res) => {
  const { method, url } = req;
  logger.warn(`Ruta ${method} ${url} no implementada`);
  res.send(`Ruta ${method} ${url} no implementada`);
});

const server = app.listen(port, () => {
  logger.info(`Example app listening on port ${port}!`);
});

server.on("error", () => logger.error("Error en el servidor!"));
