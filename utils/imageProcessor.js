/**
 * Image Processing Utility
 * Handles conversion of uploaded files from Cloudinary to database format
 */

/**
 * Process main image from uploaded files (Cloudinary)
 * @param {Object} files - req.files object from multer (with Cloudinary)
 * @param {Object} existingImage - Current image object (for preservation)
 * @returns {Object} Processed image object or existing image
 */
const processMainImage = (files, existingImage) => {
  if (files?.image?.[0]) {
    const mainFile = files.image[0];
    return {
      filename: mainFile.filename || mainFile.public_id,
      url: mainFile.path || mainFile.secure_url || mainFile.url,
      cloudinary_id: mainFile.filename || mainFile.public_id
    };
  }
  // Return existing image if no new file uploaded
  return existingImage;
};

/**
 * Process gallery images from uploaded files (Cloudinary)
 * @param {Object} files - req.files object from multer (with Cloudinary)
 * @param {Array} existingGallery - Current gallery array (for preservation)
 * @returns {Array} Processed gallery array
 */
const processGalleryImages = (files, existingGallery = []) => {
  if (files?.gallery?.length > 0) {
    return files.gallery.map(file => ({
      filename: file.filename || file.public_id,
      url: file.path || file.secure_url || file.url,
      cloudinary_id: file.filename || file.public_id
    }));
  }
  // Return existing gallery if no new files uploaded
  return existingGallery;
};

/**
 * Process both main and gallery images together
 * @param {Object} files - req.files object from multer (with Cloudinary)
 * @param {Object} existingImage - Current image object
 * @param {Array} existingGallery - Current gallery array
 * @returns {Object} Object containing processed image and gallery
 */
const processAllImages = (files, existingImage, existingGallery = []) => {
  return {
    image: processMainImage(files, existingImage),
    gallery: processGalleryImages(files, existingGallery)
  };
};

module.exports = {
  processMainImage,
  processGalleryImages,
  processAllImages
};
