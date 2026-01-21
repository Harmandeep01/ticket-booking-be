const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://ticket-booking-m7jcfj6jp-harmandeep01s-projects.vercel.app", // allow all origins
  })
);

app.use(express.json());

app.use("/api", require("./routes"));

module.exports = app;