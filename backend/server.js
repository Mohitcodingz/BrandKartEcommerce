const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config");
const userModel = require('./userSchema');
app.use(express.json());
app.get("/", (req, res) => {
  res.send("This is a homePage");
});

app.post("/register", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({
      message: "User registered successfully"
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});
app.listen(3000, async () => {
  await connectDB();
  console.log("server is running on http://localhost:3000");
});
