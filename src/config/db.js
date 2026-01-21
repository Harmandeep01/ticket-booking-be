const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000,          // optional but recommended
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
