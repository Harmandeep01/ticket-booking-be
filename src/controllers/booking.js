// src/controllers/booking.js

const Booking = require("../models/Booking");
const Event = require("../models/Event");

/* BOOK SEAT (USER) */
async function bookSeat(req, res, next) {
  try {
    const { eventId, seats = 1 } = req.body;

    // 1️⃣ Atomically reduce seats
    const event = await Event.findOneAndUpdate(
      {
        _id: eventId,
        availableSeats: { $gte: seats }
      },
      {
        $inc: { availableSeats: -seats }
      },
      { new: true }
    );

    // 2️⃣ If no seats left
    if (!event) {
      return res
        .status(400)
        .json({ message: "Not enough seats available" });
    }

    // 3️⃣ Create booking record
    const booking = await Booking.create({
      user: req.user._id,
      event: eventId,
      seatsBooked: seats
    });

    res.status(201).json({
      message: "Seat booked successfully",
      booking,
      remainingSeats: event.availableSeats
    });
  } catch (error) {
    next(error);
  }
}

/* GET USER BOOKINGS */
async function getMyBookings(req, res, next) {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("event", "title date")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  bookSeat,
  getMyBookings
};
