const mongoose = require("mongoose");
// const express = require("express");
const userSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});
const userModel  = mongoose.model('userDetails',userSchema);
module.exports = userModel;