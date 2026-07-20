import { Request, Response } from "express";
import userService from "./user.service";

const GetAllUsers = async (req: Request, res: Response) => {
  const users = await userService.GetAllUser();
  res.json(users);
};

const GetUser = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const user = await userService.GetUser(id);
  res.json(user);
};

const CreateUser = async (req: Request, res: Response) => {
  const newUser = await userService.CreateUser(req.body);
  res.json(newUser);
};

const UpdateUser = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const updatedUser = await userService.UpdateUser(id, req.body);
  res.json(updatedUser);
};

const DeleteUser = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  await userService.DeleteUser(id);
  res.json({ message: "User deleted" });
};

export default { GetAllUsers, GetUser, CreateUser, UpdateUser, DeleteUser };
