import express from "express";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv/config";
import blogRouter from "./modules/blogs/blogs.routes.js";
import { authRouter } from "./modules/auth/auth.controller.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/blog", blogRouter);

connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`)),
  )
  .catch((err) => console.log(err));
