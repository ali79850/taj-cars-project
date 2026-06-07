const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    const res = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    // Only delete the file after successful upload
    fs.unlinkSync(localfilePath);
    return res.secure_url;
  } catch (error) {
    // Handle specific errors for individual images
    console.error("Upload failed:", error);
    if (fs.existsSync(localfilePath)) {
      fs.unlinkSync(localfilePath);
    }
    return error;
  }
};

module.exports = uploadOnCloudinary;
