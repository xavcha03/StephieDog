const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(
    "La page s'ouvre à sur l'adresse suivante : http://localhost:" + port
  );
});
