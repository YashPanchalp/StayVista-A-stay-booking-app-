const multer = require("multer");
const path = require("path");

//-------multer configuration for file uploads------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Export different upload configurations
module.exports = {
  // Single image upload
  singleImage: upload.single("image"),
  
  // Multiple files upload (main image + gallery)
  multipleFields: upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'gallery', maxCount: 10 }
  ]),
  
  // For flexibility - export raw multer instance
  multerInstance: upload
};
