import { isValidObjectId } from "mongoose";

export default (req, res, next) => {
  const id = req.params.id;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "wrong id provided" });
  }

  next();
};
