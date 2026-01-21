// src/config/cors.js

const allowedOrigins = [
  "https://ticket-booking-m7jcfj6jp-harmandeep01s-projects.vercel.app"
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
