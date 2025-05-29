const mongoose = require("mongoose");


async function connect() {
  try {

    await mongoose.connect("mongodb://localhost:27017/project-1");
    console.log("Database connected...");

  } catch(err) {
    next(err);
  }
} 

module.exports = connect;