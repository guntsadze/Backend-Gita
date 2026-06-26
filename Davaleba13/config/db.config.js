import mongoose from "mongoose";
import dotenv from "dotenv/config";

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected sucessfully");
  } catch (e) {
    console.log("Cound not connected DB", e);
  }
};
