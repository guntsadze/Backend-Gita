import { userModel } from "./user.model";

const GetAllUser = async () => {
  return await userModel.find().sort({ score: -1 });
};

const GetUser = async (id: string) => {
  return await userModel.findById(id);
};

const CreateUser = async (data: any) => {
  return await userModel.create(data);
};

const UpdateUser = async (id: string, data: any) => {
  return await userModel.findByIdAndUpdate(id, data, { new: true });
};

const DeleteUser = async (id: string) => {
  return await userModel.findByIdAndDelete(id);
};

export default { GetAllUser, GetUser, CreateUser, UpdateUser, DeleteUser };
