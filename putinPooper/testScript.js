const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./poo.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log("connected to poo.db");
});

const checkSuitcase = "SELECT * FROM pooDB";
db.all(checkSuitcase, [], (err, content) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(content);
});
