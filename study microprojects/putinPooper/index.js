const PORT = 3000;
let letter;
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./poo.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("connected to poo.db");
});

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(PORT);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.get("/pupoo.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "/pupoo.jpg"));
});
app.get("/pupoofavicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "/pupoofavicon.ico"));
});
app.get("/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/app.js"));
});

const checkSuitcase = "SELECT * FROM pooDB";
app.get("/poops", (req, res) => {
  db.all(checkSuitcase, [], (err, content) => {
    if (err) {
      return console.log(err.message);
    }
    letter = JSON.stringify(content);
    res.send(letter);
  });
});

app.post("/poop", (req, res) => {
  console.log(req.body);
  const addPoo = "INSERT INTO pooDB(pooType)VALUES(?)";
  db.run(addPoo, [req.body.pooType], (err) => {
    if (err) {
      return console.log(err.message);
    }
  });
  res.send("ok");
});

app.post("/reset", (req, res) => {
  db.run("DELETE FROM pooDB");
  console.log("base clear");
});

//   const createSuitcase =
//     "CREATE TABLE pooDB(pooID INTEGER PRIMARY KEY,pooType INTEGER)";
//   db.run(createSuitcase);

// db.close((err) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   console.log("connection closed");
// });

//   res.sendStatus(200); //не обязательно
//   res.send("hi");
//   res.status(200).send("privet");
//   res.download('index.js')
//   res.status(200).json({ message: "privet" });
//   res.render("index", { variable: "value" });
