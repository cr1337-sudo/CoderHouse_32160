import express from "express";
const app = express();
const port = process.env.PORT || 8080;

let users = new Map();
let loggedInUsers = new Map();

const checkIfUserIsLoggedIn = (req, res, next) => {
  const { username } = req.body;
  if (!loggedInUsers.has(username)) {
    return res.status(401).json({ error: "Primero debes iniciar sesión" });
  }

  return next();
};
app.use(express.json());

app.post("/registro", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Ambos campos son requeridos",
    });
  }

  if (users.has(username)) {
    return res.status(400).json({
      error: "Usuario ya registrado",
    });
  }

  users.set(username, { username, password });

  return res.status(201).json({
    data: {
      username,
      password,
    },
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      error: "Ambos campos son requeridos",
    });
  }

  if (!users.has(username)) {
    return res.status(400).json({
      error: "Ha ocurrido un error durante el inicio de sesión",
    });
  }

  if (users.get(username).password !== password) {
    return res.status(400).json({
      error: "Ha ocurrido un error durante el inicio de sesión",
    });
  }

  loggedInUsers.set(username, {
    username,
    timestamp: new Date(),
  });

  return res.status(200).json({
    data: users.get(username),
  });
});

app.post("/logout", (req, res) => {
  const { username } = req.body;
  loggedInUsers.delete(username);

  return res.status(200).json({
    status: "ok",
  });
});

app.get("/", checkIfUserIsLoggedIn, (req, res) => {
  res.send("Hola usuario");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
