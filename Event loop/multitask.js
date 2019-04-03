const crypto = require("crypto");
const https = require("https");
const fs = require("fs");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 4;

function doRequest() {
  https
    .request("https://bing.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("hehe", "has dele", 100000, 512, "sha512", () => {
    console.log("Hash: ", Date.now() - start);
  });
}

doRequest();

fs.readFile("multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
