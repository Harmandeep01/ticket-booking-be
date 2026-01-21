// src/middlewares/auth.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* Protect routes */
exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token invalid" });
  }
};

/* Admin only */
exports.isAdmin = (req, res, next) => {
  console.log(req.user)
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin access only" });
  next();
};

/* User only */
exports.isUser = (req, res, next) => {
  console.log(req.user)
  if (req.user.role !== "user")
    return res.status(403).json({ message: "user access only" });
  next();
};
