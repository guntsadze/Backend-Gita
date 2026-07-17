import { Router } from "express";
import productController from "../controllers/product.controller";
import roleMiddleware from "../middlewares/role.middleware";

const productRouter = Router();

productRouter.get("/", productController.getAll);
productRouter.get("/:id", productController.getById);
productRouter.post("/", productController.create);
productRouter.put("/:id", roleMiddleware("admin"), productController.update);
productRouter.delete("/:id", roleMiddleware("admin"), productController.remove);

export default productRouter;
