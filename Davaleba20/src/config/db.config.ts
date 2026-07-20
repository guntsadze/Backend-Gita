import mongoose from "mongoose";
import "dotenv/config";

export default async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL ?? "");
  } catch (e) {
    console.log(e);
  }
};
