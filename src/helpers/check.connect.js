"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
//Count Connect
const countConnect = () => {
  const numberConnection = mongoose.connections.length;
  console.log(`Number of connection::${numberConnection}`);
};

//Check Over Load
const checkOverLoad = () => {
  setInterval(() => {
    const numberConnection = mongoose.connections.length;
    const numberCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //Example maximum number of connections based on number osf cores
    console.log(`Active connections: ${numberConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    const maxConnections = numberCores * 5;

    if (numberConnection > maxConnections) {
      console.log(`Connection overload detected`);
    }
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverLoad,
};
