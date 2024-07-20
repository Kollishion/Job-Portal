import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, role, password } = req.body;
  if (!name || !email || !phone || !role || !password) {
    return next(new ErrorHandler("Please fill full registration form!", 400));
  }
  const isEmail = await User.findOne({ email });

  if (isEmail) {
    return next(new ErrorHandler("Email already exists", 400));
  }

  const user = await User.create({
    name,
    email,
    phone,
    role,
    password,
  });
  sendToken(user, 200, res, "User Registered Successfully");
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return next(
      new ErrorHandler("Please provide email, password and role", 400)
    );
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    console.log("User not found");
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    console.log("Password mismatch");
    return next(new ErrorHandler("Invalid Email or Password", 400));
  }

  if (user.role !== role) {
    console.log("Role mismatch");
    return next(new ErrorHandler("User with this role not found", 400));
  }

  sendToken(user, 200, res, "User logged in successfully!");
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged out successfully!",
    });
});
