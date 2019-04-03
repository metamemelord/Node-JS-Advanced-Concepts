const express = require("express");
const app = express();
const Worker = require("webworker-threads").Worker;

app.get("/", (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let counter = 0;
      while (counter < 1000000000) {
        counter++;
      }
      postMessage(counter);
    };
  });

  worker.onmessage = function(message) {
    console.log(message);
    res.send("" + message.data);
  };
  worker.postMessage();
});
app.get("/fast", (req, res) => {
  res.send("Fast af");
});
app.listen(3000);
