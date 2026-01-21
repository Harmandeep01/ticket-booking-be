// src/app.js

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./config/cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ticket-booking-gb4gr29w0-harmandeep01s-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.use("/api/auth", require("./routes/auth_routes"));
app.use("/api/events", require("./routes/event_routes"));
app.use("/api/bookings", require("./routes/booking_routes"));

// app.use(require("./middlewares/error"));

module.exports = app;
