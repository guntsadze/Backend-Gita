import { Request, Response } from "express";
import ProductService from "../services/product.service";
import { IProduct } from "../types/product.type";

const getAll = async (req: Request, res: Response) => {
  const products = await ProductService.getAll();
  return res.status(200).json(products);
};

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const product = await ProductService.getById(id);
    return res.status(200).json(product);
  } catch (error: any) {
    if (error.message === "PRODUCT_NOT_FOUND") {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(500).json({ message: "Server error" });
  }
};

const create = async (req: Request, res: Response) => {
  const newProduct = await ProductService.create(req.body);
  return res.status(201).json(newProduct);
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string };
    const updatedProduct = await ProductService.update(id, req.body);
    return res.status(200).json(updatedProduct);
  } catch (error: any) {
    if (error.message === "PRODUCT_NOT_FOUND") {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(500).json({ message: "Server error" });
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  await ProductService.remove(id);
  return res.status(200).json({ message: "Product deleted successfully" });
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
