const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/cors");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/events", require("./routes/event.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));

module.exports = app;
