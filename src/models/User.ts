import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    annualIncome: {
      type: Number,
      default: 0,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    maritalStatus: {
      type: String,
      enum: ["single", "married", "divorced", "widowed"],
      required: true,
    },
    hasExistingInsurance: {
      type: Boolean,
      default: false,
    },
    preferredCoverageType: {
      type: String,
      enum: ["individual", "family", "senior", "other"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
