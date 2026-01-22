const router = require("express").Router();

router.use("/auth", require("./auth_routes"));
router.use("/events", require("./event_routes"));
router.use("/bookings", require("./booking_routes"));

module.exports = router;