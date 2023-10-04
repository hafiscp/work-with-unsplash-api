const express = require("express");
const app = express();

require("dotenv").config();
const ACCESS_KEY = process.env.ACCESS_KEY;
console.log(ACCESS_KEY);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("PORT 8000");
});
