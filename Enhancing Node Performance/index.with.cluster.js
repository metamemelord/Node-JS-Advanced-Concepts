process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const crypto = require("crypto");
// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed again but in child mode
  cluster.fork();
  cluster.fork();
} else {
  // I am a child, I will act like a server
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("hehe", "has dele", 100000, 512, "sha512", (error, data) => {
      res.send("TEST");
    });
  });
  app.get("/fast", (req, res) => {
    res.send("Fast af");
  });
  app.listen(3000);
}
