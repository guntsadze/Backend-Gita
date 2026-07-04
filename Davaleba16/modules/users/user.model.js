import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileImageUrl: {
      type: String,
      required: false,
    },
    profileImagePublicId: {
      type: String,
      required: false,
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
    password: {
      type: String,
      required: true,
      select: false,
    },
    birthDate: {
      type: Date,
      required: false,
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog",
        default: [],
      },
    ],
  },
  { timestamps: true },
);

export const userModel = mongoose.model("user", userSchema);
