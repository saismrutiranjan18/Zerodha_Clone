require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URL;

const app = express();

app.listen(PORT, () => {
  console.log("Server is running on port 3000");

  mongoose.connect(url);
  console.log("Connected to MongoDB");
});