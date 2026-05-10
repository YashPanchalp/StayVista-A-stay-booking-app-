// Import Cloudinary upload configuration
const {
  singleImage,
  multipleFields,
  multerInstance,
  cloudinary
} = require('./cloudinaryUpload');

// Export different upload configurations
module.exports = {
  // Single image upload
  singleImage: singleImage,
  
  // Multiple files upload (main image + gallery)
  multipleFields: multipleFields,
  
  // For flexibility - export raw multer instance
  multerInstance: multerInstance,
  
  // Export cloudinary for image operations
  cloudinary: cloudinary
};
