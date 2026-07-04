import * as blogService from "./blog.service.js";

export const create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const authorId = req.userId;

    const blog = await blogService.create(title, content, authorId);
    return res.status(201).json(blog);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req, res) => {
  const blogs = await blogService.getAll();
  return res.status(200).json(blogs);
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogService.getById(id);

    return res.status(200).json(blog);
  } catch (error) {
    if (error.message === "BLOG_NOT_FOUND") {
      return res
        .status(404)
        .json({ message: "ბლოგი მოცემული ID-ით ვერ მოიძებნა" });
    }

    if (error.message === "ID_IS_REQUIRED") {
      return res
        .status(400)
        .json({ message: "ბლოგის ID არასწორია ან ცარიელია" });
    }

    return res.status(500).json({
      error: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.userId;

    const updatedBlog = await blogService.update(id, title, content, userId);

    return res.status(200).json(updatedBlog);
  } catch (error) {
    if (error.message === "NOT_YOUR_BLOG") {
      return res
        .status(403)
        .json({ message: "ეს თქვენი ბლოგი არაა და ვერ განაახლებთ!" });
    }
    if (error.message === "BLOG_NOT_FOUND") {
      return res.status(404).json({ message: "ბლოგი ვერ მოიძებნა" });
    }
    return res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    await blogService.remove(id, userId);

    return res.status(200).json({ message: "ბლოგი წარმატებით წაიშალა" });
  } catch (error) {
    if (error.message === "NOT_YOUR_BLOG") {
      return res
        .status(403)
        .json({ message: "ეს თქვენი ბლოგი არაა და ვერ წაშლით!" });
    }
    if (error.message === "BLOG_NOT_FOUND") {
      return res.status(404).json({ message: "ბლოგი ვერ მოიძებნა" });
    }
    return res.status(500).json({ error: error.message });
  }
};
