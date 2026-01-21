// src/routes/event_routes.js

const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getSingleEvent
} = require("../controllers/event");

const { protect, isAdmin } = require("../middlewares/auth");

/* PUBLIC ROUTES */
router.get("/", getAllEvents);
router.get("/:id", getSingleEvent);

/* ADMIN ONLY (hidden from frontend UI) */
router.post("/", protect, isAdmin, createEvent);

module.exports = router;
