const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User =require("../models/UserModel")
const bcrypt = require("bcryptjs");
const connectDB = require("../config/db");


const createAdmin = async () => {
  await connectDB();

 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("admin123", salt);

  const admin = new User({
    name: "Admin",
    email: "admin69@example.com",
    password: hashedPassword,
    role: "admin"
  });

  await admin.save();
  console.log("✅ Admin user created!");
  process.exit(0);
};

createAdmin();
