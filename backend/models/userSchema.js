import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    minLength: [8, "Name must contain at least 3 characters!"],
    maxLength: [30, "Name must contain less than 30 characters"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Please provide your phone number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your password!"],
    minLength: [8, "Password must contain atleast 8 characters"],
    maxLength: [32, "Password must contain less than 32 characters"],
  },
  role: {
    type: String,
    required: [true, "Please provide your role"],
    enum: ["Job Seeker", "Employer", "Admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Comparing password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Generating a JWT token for Authorisation
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

export const User = mongoose.model("User", userSchema);
