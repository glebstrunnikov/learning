const EventEmitter = require("events");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

class Logger extends EventEmitter {
  logToConsole(msg) {
    this.emit("message", { id: uuid.v4(), msg: msg });
  }
}

// logger.on("message", (data) => {
//   console.log(data);
// });

module.exports = Logger;
