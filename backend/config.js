const { DB_URL, DB_NAME } = require("./db");
const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(`${DB_URL}/${DB_NAME}`);
    console.log("Connected to MongoDB Mohit");
  } catch (error) {
    console.log("Mongose is not working");
  }
}
module.exports = connectDB;
