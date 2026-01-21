const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/cors");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", require("./routes/auth_routes"));
app.use("/api/events", require("./routes/event_routes"));
app.use("/api/bookings", require("./routes/booking_routes"));

module.exports = app;
