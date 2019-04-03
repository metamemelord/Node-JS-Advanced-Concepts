const crypto = require("crypto");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  crypto.pbkdf2("hehe", "has dele", 100000, 512, "sha512", (error, data) => {
    res.send(data.toString());
  });
});
app.get("/fast", (req, res) => {
  res.send("Fast af");
});
app.listen(3000);
