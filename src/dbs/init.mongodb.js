"use strict";
const mongoose = require("mongoose");
const config = require("../configs/config.mongodb");
const connectString = `mongodb://localhost:${config.db.port}/${config.db.name}`;
const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => console.log(`Connected Mongodb success`, countConnect()))
      .catch((err) => console.log(`Error connected`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
