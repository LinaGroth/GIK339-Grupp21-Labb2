const express = require("express");
const server = express();

const sqlite3 = require("sqlite3").verbose();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
  });

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});

server.get("/users", (req, res) => {
  const query = "SELECT * FROM users";

  const db = new sqlite3.Database("./gik339-labb2.db", (err) => {
    if (err) {
      console.error("Kunde inte ansluta till databasen:", err.message);
    } else {
      console.log("Ansluten till SQLite-databasen.");
    }
  });

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Fel vid databasfråga:", err.message);
      res.status(500).send("Ett fel uppstod vid hämtning av data.");
    } else {
      console.log("Data hämtad:", rows);
      res.json(rows);
    }
  });
});
