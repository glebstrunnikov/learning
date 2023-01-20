const Data = require("./person");
// const city = require("./person");

const fs = require("fs");
const path = require("path");
const os = require("os");
const url = require("url");
const EventEmitter = require("events");
const uuid = require("uuid");
const Logger = require("./logger");
const http = require("http");

const myURL = new URL("https://google.com:8000/fuck.html?shit=1&cunt=0");
let testtext;

// import person from "./person";

// console.log(path);
// console.log(Data);
// console.log(Data.person.name);

// fs.mkdir(path.join(__dirname, "test"), {}, () => {});
// fs.writeFile(
//   path.join(__dirname, "test", "testtext.txt"),
//   "text no one",
//   () => {}
// );
// fs.appendFile(
//   path.join(__dirname, "test", "testtext.txt"),
//   " text no two",
//   () => {
//     fs.readFile(
//       path.join(__dirname, "test", "testtext.txt"),
//       "utf8",
//       (err, data) => {
//         if (err) throw err;
//         console.log(data);
//       }
//     );
//   }
// );

// console.log(os.platform());
// console.log(os.arch());
// console.log(city);
// console.log(os.cpus());

// console.log("totalmem:", os.totalmem());
// console.log("homedir:", os.homedir());
// console.log("uptime:", os.uptime());
// console.log("nationality quality:", Data.nationality.quality);
// console.log("drunk:", Data.drunk);

// console.log(myURL.href);
// myURL.searchParams.append("abc", "123");
// console.log(myURL.searchParams);
// myURL.searchParams.forEach((val, nam) => {
//   console.log(val, nam);
// });

// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("smth hapenned");
// });
// myEmitter.emit("event");

// console.log(uuid.v4());

// const logger = new Logger();
// logger.on("message", (data) => {
//   //   console.log(JSON.stringify(data));
//   fs.appendFile(
//     path.join(__dirname, "test", "testtext.txt"),
//     ` ${JSON.stringify(data)}`,
//     () => {}
//   );
// });

// logger.on("message", (data) => {
//   console.log(data);
// });

// logger.logToConsole("1");
// logger.logToConsole("2");
// logger.logToConsole("3");
// logger.logToConsole("4");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if (req.url === "/") {

  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       // res.write("Welcome");
  //       res.end(content);
  //     }
  //   );
  // }

  // if (req.url === "/about") {
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   // res.write("Welcome");
  //   res.end("<h1>About</h1>");
  // }

  // if (req.url === "/api/text") { // ну хуй знает
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   fs.readFile(
  //     path.join(__dirname, "test", "testtext.txt"),
  //     "utf-8",
  //     (err, data) => {
  //       if (err) throw err;
  //       testtext = data;
  //     }
  //   );
  //   res.end(JSON.stringify(testtext));
  // }

  let filepath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  let extname = path.extname(filepath);
  let contenType = "text/html";
  extname === ".js"
    ? (contenType = "text/javascript")
    : extname === ".css"
    ? (contenType = "text/css")
    : extname === ".json"
    ? (contenType = "application/json")
    : extname === ".png"
    ? (contenType = "image/png")
    : extname === ".jpg"
    ? (contenType = "image/jpg")
    : null;

  fs.readFile(filepath, (err, data) => {
    if (err) {
      if (err.code == "ENOENT") {
        // filepath = path.join(__dirname, "public", "404.html");
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          res.writeHead(200, { "Content-type": "text/html" });
          if (err) throw err;
          res.end(data, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-type": contenType });
      res.end(data, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
