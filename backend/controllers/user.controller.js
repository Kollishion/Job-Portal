import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";

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
  res.status(200).json({
    succes: true,
    message: "User registered succesfully!",
    user,
  });
});
export const login = catchAsyncError(async (req, res, next) => {});
export const logout = catchAsyncError(async (req, res, next) => {});
