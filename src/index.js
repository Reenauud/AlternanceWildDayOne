const express = require("express");
const typeorm = require("typeorm");

const app = express();

/* création d'une nouvelle base de données appelée Wildersdb.sqlite et la synchronise avec le fichier
Wilders.js. */
const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "Wildersdb.sqlite",
  synchronize: true,
  entities: [require("./Wilders.js")],
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const start = async (req, res) => {
  /*initialisation de la base de données. */
  await dataSource.initialize();
  /* Enregistrement du nom des premiers wilders dans la base de données. */
  dataSource.getRepository("Wilders").save({ name: " First Wilders" });
  console.log("App listening on port 3000!");
};

start();
