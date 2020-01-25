const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>HALOOOOOOOOOO</h1>");
});

app.listen(5000, () => {
  console.log("dsfsaž");
});
