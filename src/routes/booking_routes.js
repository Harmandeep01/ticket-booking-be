// src/routes/booking_routes.js

const express = require("express");
const router = express.Router();

const {
  bookSeat,
  getMyBookings
} = require("../controllers/booking");

const { protect, isUser } = require("../middlewares/auth");

/* USER */
router.post("/", protect, isUser, bookSeat);
router.get("/my", protect, isUser, getMyBookings);

module.exports = router;
