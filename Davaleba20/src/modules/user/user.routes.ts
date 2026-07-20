import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.get("/", userController.GetAllUsers);
userRouter.get("/:id", userController.GetUser);
userRouter.post("/", userController.CreateUser);
userRouter.put("/:id", userController.UpdateUser);
userRouter.delete("/:id", userController.DeleteUser);

export default userRouter;
