import cloudinary from "../config/cloudinary.config.js";

export const uploadFile = async (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (err, result) => {
        if (err) reject(err);

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      },
    );

    stream.end(fileBuffer);
  });
};

export const deleteFile = async (publicId) => {
  if (!publicId) return;

  await cloudinary.uploader.destroy(publicId);
};
