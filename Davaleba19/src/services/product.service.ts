import { Request, Response } from "express";
import { productModel } from "../models/product.model";
import { IProduct } from "../types/product.type";

const getAll = async () => {
  return await productModel.find();
};

const getById = async (id: string) => {
  if (!id) throw new Error("ID_IS_REQUIRED");
  const product = await productModel.findById(id);
  if (!product) throw new Error("PRODUCT_NOT_FOUND");
  return product;
};

const create = async (data: IProduct) => {
  return await productModel.create(data);
};

const update = async (id: string, data: IProduct) => {
  const product = await productModel.findByIdAndUpdate(id, data, { new: true });
  if (!product) throw new Error("PRODUCT_NOT_FOUND");
  return product;
};

const remove = async (id: string) => {
  const product = await productModel.findByIdAndDelete(id);
  return product;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
