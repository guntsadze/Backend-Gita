import { Router } from "express";
import { uploadProfileImage, deleteProfileImage } from "./user.controller.js";
import { upload } from "../../middlewares/upload.middleware.js";
import { isAuthMiddleware } from "../../middlewares/is-auth.middleware.js";

const userRouter = Router();

userRouter.use(isAuthMiddleware);

userRouter.post("/profile-image", upload.single("avatar"), uploadProfileImage);

userRouter.delete("/profile-image", deleteProfileImage);

export default userRouter;
