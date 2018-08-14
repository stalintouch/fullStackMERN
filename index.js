const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'cool' })
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0")
