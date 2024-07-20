import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide job title"],
    minLength: [3, "Job title must contain at least 3 characters!"],
    maxLength: [50, "Job title must contain at most 50 characters!"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
    minLength: [50, "Description must contain at least 50 characters!"],
    maxLength: [350, "Description must contain at most 350 characters!"],
  },
  category: {
    type: String,
    required: [true, "Job category is required"],
    minLength: [1, "Category must contain at least 1 character!"],
    maxLength: [20, "Category must contain at most 20 characters!"],
  },
  country: {
    type: String,
    required: [true, "Job Country is required"],
    minLength: [4, "Country must contain at least 4 characters!"],
    maxLength: [20, "Country must contain at most 20 characters!"],
  },
  city: {
    type: String,
    required: [true, "Job City is required"],
    minLength: [4, "City must contain at least 4 characters!"],
    maxLength: [20, "City must contain at most 20 characters!"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minLength: [50, "Location must contain at least 50 characters!"],
    maxLength: [150, "Location must contain at most 150 characters!"],
  },
  fixedSalary: {
    type: Number,
    minLength: [4, "Fixed salary must contain atleast 4 digits"],
    maxLength: [9, "Fixed salary must cannot exceed 9 digits!"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "Salary must contain atleast 4 digits!"],
    maxLength: [9, "Fixed salary must cannot exceed 9 digits!"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "Salary must contain atleast 4 digits!"],
    maxLength: [9, "Fixed salary must cannot exceed 9 digits!"],
  },
  expired: {
    type: Boolean,
    default: false,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
