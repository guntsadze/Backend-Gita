import express from "express";
import cors from "cors";
import { createServer } from "http";
import connectDB from "./config/db.config.js";
import { seedQuizzes } from "./modules/quiz/quiz.seed.js";
import { initSocket } from "./modules/socket/socket.service.js";
import userRouter from "./modules/user/user.routes.js";
import "dotenv/config";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 5013;

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

initSocket(server);

connectDB().then(async () => {
  await seedQuizzes();
  server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
});
