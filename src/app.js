const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*", // allow all origins
  })
);

app.use(express.json());

app.use("/api", require("./routes"));

module.exports = app;