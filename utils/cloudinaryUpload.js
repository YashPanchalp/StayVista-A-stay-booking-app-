require('./cloudinaryConfig');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'airbnb-listings', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif'],
    quality: 'auto',
    fetch_format: 'auto',
    resource_type: 'auto',
  },
});

// File filter to accept only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

// Create multer upload instance with Cloudinary storage
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Export different upload configurations
module.exports = {
  // Single image upload
  singleImage: upload.single('image'),

  // Multiple fields upload (main image + gallery)
  multipleFields: upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'gallery', maxCount: 10 }
  ]),

  // For flexibility - export raw multer instance
  multerInstance: upload,

  // Export cloudinary instance for direct deletion
  cloudinary: cloudinary
};
