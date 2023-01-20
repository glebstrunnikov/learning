const http = require("http");
http
  .createServer((req, res) => {
    res.write("this is the response");
    res.end();
  })
  .listen(5000, () => {
    console.log("privet");
  });
