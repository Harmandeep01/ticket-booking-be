// src/app.js

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./config/cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.use("/api/v1/auth", require("./routes/auth_routes"));
app.use("/api/v1/events", require("./routes/event_routes"));
app.use("/api/v1/bookings", require("./routes/booking_routes"));

// app.use(require("./middlewares/error"));

module.exports = app;
