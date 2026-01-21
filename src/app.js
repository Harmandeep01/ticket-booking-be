const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/cors");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", require("./routes"));

module.exports = app;
