const express = require("express");
const { exec } = require("child_process");
const app = express();

// VULNERABLE a propósito: el input del usuario va directo al shell
app.get("/ping", (req, res) => {
  const host = req.query.host;
  exec("ping -c 1 " + host, (err, stdout) => {
    res.send(stdout);
  });
});

app.listen(3000);
