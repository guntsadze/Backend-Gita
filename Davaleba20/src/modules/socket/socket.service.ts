import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { userModel } from "../user/user.model";
import { quizModel } from "../quiz/quiz.model";

let io: Server;
const onlineUsers = new Map<string, string>();

const broadcastLeaderboard = async () => {
  const leaderboard = await userModel.find().sort({ score: -1 }).limit(10);
  io.emit("leaderboard_update", leaderboard);
};

export const initSocket = (server: HttpServer) => {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("user_online", (userId: string) => {
      onlineUsers.set(socket.id, userId);
      io.emit("online_users_count", onlineUsers.size);
    });

    socket.on(
      "submit_answer",
      async (data: { userId: string; quizId: string; answer: string }) => {
        const quiz = await quizModel.findById(data.quizId).catch(() => null);
        const isCorrect = !!quiz && quiz.correctAnswer === data.answer;

        if (isCorrect) {
          await userModel.findByIdAndUpdate(data.userId, {
            $inc: { score: 10 },
          });
        }

        socket.emit("submit_answer_result", { isCorrect });
        await broadcastLeaderboard();
      },
    );

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
      onlineUsers.delete(socket.id);
      io.emit("online_users_count", onlineUsers.size);
    });
  });

  return io;
};
