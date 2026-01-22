// src/controllers/auth.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

/* Register */
async function register(req, res, next) {
  // logic
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password, role });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user)
    });
  } catch (error) {
    console.log(error.message)
    next(error);
  }
};

/* Login */
async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }, );
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      message: "Login successful",
      token: generateToken(user)
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login
};