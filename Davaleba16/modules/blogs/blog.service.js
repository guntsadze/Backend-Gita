import { userModel } from "../users/user.model.js";
import { blogModel } from "./blogs.model.js";

export const create = async (title, content, authorId) => {
  const blog = await blogModel.create({ title, content, author: authorId });

  await userModel.findByIdAndUpdate(authorId, { $push: { blogs: blog._id } });

  return blog;
};

export const getAll = async (req, res) => {
  const blogs = await blogModel.find().populate("author", "fullName email");
  return blogs;
};

export const getById = async (id) => {
  if (!id) throw new Error("ID_IS_REQUIRED");

  const blog = await blogModel.findById(id);

  if (!blog) throw new Error("BLOG_NOT_FOUND");

  return blog;
};

export const update = async (id, title, content, userId) => {
  const blog = await blogModel.findById(id);
  if (!blog) throw new Error("BLOG_NOT_FOUND");

  if (blog.author.toString() !== userId) {
    throw new Error("NOT_YOUR_BLOG");
  }

  const updatedBlog = await blogModel.findByIdAndUpdate(
    id,
    { title, content },
    { new: true },
  );

  return updatedBlog;
};

export const remove = async (id, userId) => {
  const blog = await blogModel.findById(id);
  if (!blog) throw new Error("BLOG_NOT_FOUND");

  if (blog.author.toString() !== userId) {
    throw new Error("NOT_YOUR_BLOG");
  }

  await blogModel.findByIdAndDelete(id);

  await userModel.findByIdAndUpdate(userId, { $pull: { blogs: id } });

  return true;
};
