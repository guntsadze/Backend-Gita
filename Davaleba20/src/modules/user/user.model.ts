import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthDate: {
      type: Date,
      required: false,
    },
    score: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const userModel = mongoose.model("user", userSchema);
