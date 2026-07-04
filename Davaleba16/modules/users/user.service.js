import { deleteFile, uploadFile } from "../../lib/cloudinary.lib.js";
import { userModel } from "./user.model.js";

export const uploadProfileImage = async (userId, fileBuffer) => {
  const user = await userModel.findById(userId);
  if (!user) throw new Error("USER_NOT_FOUND");

  if (fileBuffer) {
    if (user.profileImagePublicId) {
      await deleteFile(user.profileImagePublicId);
    }

    const cloudinaryResult = await uploadFile(fileBuffer, "profile_pictures");

    user.profileImageUrl = cloudinaryResult.url;
    user.profileImagePublicId = cloudinaryResult.publicId;
  }

  await user.save();
  return user;
};

export const deleteProfileImage = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) throw new Error("USER_NOT_FOUND");

  if (!user.profileImagePublicId) {
    throw new Error("NO_PROFILE_IMAGE");
  }

  await deleteFile(user.profileImagePublicId);

  user.profileImageUrl = undefined;
  user.profileImagePublicId = undefined;
  await user.save();

  return true;
};
