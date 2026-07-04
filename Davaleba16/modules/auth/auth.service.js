import { userModel } from "../users/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signUp = async (userData) => {
  const { fullName, email, password, birthDate } = userData;

  const existUser = await userModel.findOne({ email });
  if (existUser) {
    return "ALREADY_EXISTS";
  }

  const hashedPass = await bcrypt.hash(password, 10);
  await userModel.create({
    fullName,
    email,
    password: hashedPass,
  });

  return "OK";
};

const signIn = async (signInData) => {
  const { email, password } = signInData;

  const existUser = await userModel.findOne({ email }).select("+password");
  if (!existUser) {
    return "INVALID_CREDENTIALS";
  }

  const isPassEqual = await bcrypt.compare(password, existUser.password);
  if (!isPassEqual) {
    return "INVALID_CREDENTIALS";
  }

  const payLoad = {
    userId: existUser._id,
  };

  const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign(payLoad, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  existUser.refreshToken = refreshToken;
  await existUser.save();

  return { accessToken, refreshToken };
};

const refreshTokens = async (oldRefreshToken) => {
  try {
    const decoded = jwt.verify(oldRefreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await userModel.findById(decoded.userId);
    if (!user || user.refreshToken !== oldRefreshToken) {
      return null;
    }

    const payLoad = { userId: user._id };

    const newAccessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const newRefreshToken = jwt.sign(payLoad, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });

    user.refreshToken = newRefreshToken;
    await user.save();

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
    return null;
  }
};

const currentUser = async (userId) => {
  const existsUser = await userModel.findById(userId);
  return existsUser;
};

export const AuthService = {
  signUp,
  signIn,
  refreshTokens,
  currentUser,
};
