const russian = { quality: "good" };

class Data {
  static person = {
    name: "Gleb",
    age: 31,
  };

  static city = {
    name: "Nessebar",
    temp: "hot",
  };

  static nationality = russian;
}

Data.drunk = false;
// const data = new Data();
// data.drunk = false;

// module.exports = person;
// module.exports = city;
module.exports = Data;
console.log(__filename);
