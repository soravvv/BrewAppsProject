const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// importing routes
const books = require("./controller/books");
app.use("/api/books", books)

module.exports = app