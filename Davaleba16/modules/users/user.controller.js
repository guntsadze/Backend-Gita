import * as userService from "./user.service.js";

export const uploadProfileImage = async (req, res) => {
  try {
    const userId = req.userId;
    const fileBuffer = req.file ? req.file.buffer : null;

    const updatedUser = await userService.uploadProfileImage(
      userId,
      fileBuffer,
    );

    return res.status(200).json({
      message: req.file
        ? "პროფილის ფოტო წარმატებით განახლდა"
        : "მონაცემები შენახულია (ფოტო არ შეცვლილა)",
      profileImageUrl: updatedUser.profileImageUrl || null,
    });
  } catch (error) {
    if (error.message === "USER_NOT_FOUND") {
      return res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }
    return res.status(500).json({
      message: "სისტემური შეცდომა ფოტოს ატვირთვისას",
      error: error.message,
    });
  }
};

export const deleteProfileImage = async (req, res) => {
  try {
    const userId = req.userId;

    await userService.deleteProfileImage(userId);

    return res
      .status(200)
      .json({ message: "პროფილის ფოტო წარმატებით წაიშალა" });
  } catch (error) {
    if (error.message === "USER_NOT_FOUND") {
      return res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }
    if (error.message === "NO_PROFILE_IMAGE") {
      return res
        .status(400)
        .json({ message: "მომხმარებელს პროფილის ფოტო არ აქვს" });
    }
    return res.status(500).json({
      message: "სისტემური შეცდომა ფოტოს წაშლისას",
      error: error.message,
    });
  }
};
