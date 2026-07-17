import express from "express";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv/config";
import productRouter from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5013;

app.use(express.json());

app.use("/products", productRouter);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
});
