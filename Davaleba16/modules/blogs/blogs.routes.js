import { Router } from "express";
import { create, getAll, getById, update, remove } from "./blog.controller.js";
import { isAuthMiddleware } from "../../middlewares/is-auth.middleware.js";
import { validate } from "../../middlewares/validate.js";
import { isValidMongoIdMiddleware } from "../../middlewares/is-valid-mongo-id.middleware.js";
import { blogSchema } from "./dto/blogs.dto.js";

const blogRouter = Router();

blogRouter.use(isAuthMiddleware);

blogRouter.post("/", validate(blogSchema), create);
blogRouter.get("/", getAll);
blogRouter.get("/:id", isValidMongoIdMiddleware, getById);
blogRouter.put(
  "/:id",
  isValidMongoIdMiddleware,
  validate(blogSchema.partial()),
  update,
);
blogRouter.delete("/:id", isValidMongoIdMiddleware, remove);

export default blogRouter;
