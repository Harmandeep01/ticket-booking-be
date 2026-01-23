const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: [
      // "http://localhost:5173",
      // "https://ticket-booking-m7jcfj6jp-harmandeep01s-projects.vercel.app",
      // "https://ticket-booking-hbm4evyer-harmandeep01s-projects.vercel.app",
      "https://ticket-booking-fe-five.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", require("./routes"));

module.exports = app;
