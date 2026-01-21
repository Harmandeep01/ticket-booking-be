// src/models/Booking.js

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true
    },
    seatsBooked: {
      type: Number,
      default: 1,
      min: 1
    }
  },
  { timestamps: true }
);

function BookingModel() {
  return mongoose.model("Booking", bookingSchema);
}

module.exports = BookingModel();
