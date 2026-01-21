// src/controllers/event.js

const Event = require("../models/Event");

/* ADMIN: Create Event */
async function createEvent(req, res, next) {
  try {
    const { title, description, date, totalSeats } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      totalSeats,
      availableSeats: totalSeats
    });

    res.status(201).json({
      message: "Event created successfully",
      event
    });
  } catch (error) {
    next(error);
  }
}


/* PUBLIC: Get All Events (PAGINATED) */
async function getAllEvents(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const totalEvents = await Event.countDocuments();

    const events = await Event.find()
      .sort({ date: 1 })
      .skip(skip)
      .limit(limit);

    res.json({
      totalEvents,
      totalPages: Math.ceil(totalEvents / limit),
      currentPage: page,
      events
    });
  } catch (error) {
    next(error);
  }
}

/* PUBLIC: Get Single Event */
async function getSingleEvent(req, res, next) {
  try {
    const event = await Event.findById(req.params.id);

    if (!event)
      return res.status(404).json({ message: "Event not found" });

    res.json(event);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent
};
