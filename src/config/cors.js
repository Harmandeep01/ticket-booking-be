// src/config/cors.js

const allowedOrigins = [
  "http://localhost:5173",
  "https://ticket-booking-gb4gr29w0-harmandeep01s-projects.vercel.app"
];

function corsOptions(req, callback) {
  const origin = req.header("Origin");

  if (!origin || allowedOrigins.includes(origin)) {
    callback(null, {
      origin: true,
      credentials: true
    });
  } else {
    callback(new Error("Not allowed by CORS"));
  }
}

module.exports = corsOptions;
