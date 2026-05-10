# Cloudinary Image Storage Setup Guide

## What Has Been Done

Your AirBnb application has been successfully migrated from local file storage (`/public/uploads`) to **Cloudinary**, a cloud-based image storage and CDN service. Here's what was implemented:

### Changes Made:

1. **Installed Dependencies**
   - `cloudinary` - Cloudinary SDK for Node.js
   - `multer-storage-cloudinary` - Cloudinary storage driver for Multer

2. **Created New Configuration Files**
   - `utils/cloudinaryConfig.js` - Cloudinary initialization with environment variables
   - `utils/cloudinaryUpload.js` - Multer configuration using Cloudinary storage

3. **Updated Existing Files**
   - `utils/upload.js` - Now uses Cloudinary upload instead of local disk storage
   - `utils/imageProcessor.js` - Updated to handle Cloudinary URLs and store public IDs
   - `models/listing.js` - Added `cloudinary_id` field to store Cloudinary public IDs for easy deletion
   - `services/listingService.js` - Added automatic deletion of images from Cloudinary when listings/images are deleted
   - `app.js` - Added Cloudinary config initialization
   - `.env` - Added Cloudinary credentials placeholders

---

## Setup Instructions

### Step 1: Create a Cloudinary Account

1. Go to [https://cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. Verify your email

### Step 2: Get Your Cloudinary Credentials

1. Go to your Cloudinary Dashboard
2. Navigate to **Settings** → **API Keys**
3. You will see:
   - **Cloud Name** (e.g., `dxxxxx`)
   - **API Key** (e.g., `123456789...`)
   - **API Secret** (e.g., `abc_xyz...`)

### Step 3: Update Your .env File

Update your `.env` file with your actual Cloudinary credentials:

```env
# Google Maps API Key
GOOGLE_MAPS_API_KEY=AIzaSyD_VVFQBQ00H4MzP59oX6uB33w91n_07aI

# MongoDB Connection
MONGO_URL=mongodb+srv://776yashp_db_user:eWRYNeTWibL44x.@cluster0.9tmugxt.mongodb.net/airbnb?retryWrites=true&w=majority&tls=true

# Session Secret
SESSION_SECRET=mysupersecretcode

# Environment
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

Replace:
- `your_actual_cloud_name` with your Cloud Name
- `your_actual_api_key` with your API Key
- `your_actual_api_secret` with your API Secret

### Step 4: Test the Setup

1. Restart your application:
   ```bash
   npm start
   # or
   npm run dev
   ```

2. Try uploading a new listing with images
3. Check your Cloudinary Dashboard to verify images are being stored there
4. Images should now display correctly on the website

---

## How It Works

### Image Upload Flow:
1. User uploads an image through your form
2. Multer receives the file
3. Cloudinary Storage driver automatically uploads it to Cloudinary
4. Image metadata (URL, public_id) is returned
5. The image URL and Cloudinary public_id are stored in MongoDB

### Image Deletion Flow:
1. When a listing is deleted, the service automatically:
   - Retrieves all Cloudinary IDs from the MongoDB document
   - Deletes images from Cloudinary using the public IDs
   - Deletes the listing from MongoDB

2. When a single image is deleted:
   - The associated Cloudinary image is deleted first
   - Then the MongoDB record is updated

---

## Features Implemented

✅ **Automatic Image Upload to Cloudinary**
- Single main image upload
- Multiple gallery images (up to 10 per listing)

✅ **MongoDB Integration**
- Image URLs stored in MongoDB
- Cloudinary public IDs stored for easy deletion

✅ **Automatic Image Cleanup**
- Images automatically deleted from Cloudinary when listings are deleted
- Gallery images automatically deleted from Cloudinary when removed

✅ **Error Handling**
- Comprehensive error handling with try-catch blocks
- Errors logged to console without blocking operations

✅ **File Size & Type Validation**
- 5MB file size limit
- Only image formats allowed (jpg, jpeg, png, gif, webp, avif)

---

## Database Structure

The `listing` model now stores:

```javascript
image: {
  filename: String,           // Cloudinary public_id
  url: String,                // Cloudinary secure URL
  cloudinary_id: String       // For deletion
}

gallery: [{
  filename: String,           // Cloudinary public_id
  url: String,                // Cloudinary secure URL
  cloudinary_id: String       // For deletion
}]
```

---

## Advantages of Cloudinary

✅ **No Local Storage** - Images stored on CDN, not on your server
✅ **Automatic Optimization** - Images automatically optimized for web
✅ **Fast Delivery** - CDN ensures fast image delivery worldwide
✅ **Free Tier** - Generous free tier for development (25 GB storage/month)
✅ **Easy Scaling** - No need to manage server disk space
✅ **Image Transformations** - Easily resize, crop, filter images on-the-fly

---

## Troubleshooting

### Issue: "Cloudinary credentials not found"
**Solution:** Verify that `.env` file has the correct Cloudinary credentials and the environment variables are properly loaded.

### Issue: "Only image files are allowed" error
**Solution:** Ensure you're uploading valid image files (jpg, jpeg, png, gif, webp, avif).

### Issue: Images not appearing after upload
**Solution:**
1. Check Cloudinary Dashboard to verify images were uploaded
2. Check browser console for network errors
3. Verify MongoDB stored the correct URL

### Issue: Images deleted from MongoDB but still in Cloudinary
**Solution:** This shouldn't happen with the current implementation. Check the console for deletion errors.

---

## Environment Variables Reference

```env
CLOUDINARY_CLOUD_NAME    # Your Cloudinary Cloud Name
CLOUDINARY_API_KEY       # Your Cloudinary API Key
CLOUDINARY_API_SECRET    # Your Cloudinary API Secret (keep this private!)
```

⚠️ **IMPORTANT**: Never commit your `.env` file with real credentials to Git. Always use `.gitignore` to exclude it.

---

## Next Steps

1. ✅ Update `.env` with Cloudinary credentials
2. ✅ Restart your application
3. ✅ Test image upload functionality
4. ✅ Verify images appear on your website
5. ✅ Check Cloudinary Dashboard for uploaded files

Enjoy your cloud-based image storage! 🎉
