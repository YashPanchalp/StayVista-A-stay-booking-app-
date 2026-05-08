const express = require("express");
const router = express.Router();

//------------all requirement -----
const asyncWarp = require("../utils/asyncWrap().js");
const { listingSchema } = require("../schema.js")
const Listing = require("../models/listing.js")
const {isLoggedIn , isOwner , validateListing} = require("../middleware.js" )
const listingController = require("../controller/listing.js")
const { multipleFields } = require("../utils/upload.js")
//----------------------------------

//-------all routers with value "/listings"------
//(1)index -listing routes
router.get("/" , asyncWarp(listingController.index));

//(1.5) search - search by location
router.get("/search" , asyncWarp(listingController.searchListings));

//written before bec "new" can consider as :id from second route
//(3)new listing - new and create routes
router.get("/new" , isLoggedIn, listingController.renderNewForm)

//(2)show - read all data from title 
router.get("/:id" , asyncWarp(listingController.showListing));

//(4)Create - new listing save and add
router.post("/" , isLoggedIn, multipleFields, validateListing, asyncWarp(listingController.createListing));

///(5)Edit Route - To edit Listings
router.get("/:id/edit" ,isLoggedIn, isOwner, asyncWarp (listingController.renderEditFrom));

//(5.5) Upload Images Route - To upload HD images for a listing
router.get("/:id/upload-images", isLoggedIn, isOwner, asyncWarp(listingController.renderUploadImagesForm));

//(6)Update Route - To update value in db and show
router.put("/:id", isLoggedIn, isOwner, multipleFields, asyncWarp (listingController.updateListing));

//(6.5) Upload Images POST - To save uploaded images
router.post("/:id/upload-images", isLoggedIn, isOwner, multipleFields, asyncWarp(listingController.uploadListingImages));

//(7) Delete route - Delete Listing
router.delete("/:id" , isLoggedIn, isOwner, asyncWarp (listingController.deleteListing));

//(8) Delete main image - Remove main image from listing
router.delete("/:id/delete-main-image", isLoggedIn, isOwner, asyncWarp(listingController.deleteMainImage));

//(9) Delete gallery image - Remove specific gallery image from listing
router.delete("/:id/delete-gallery-image/:index", isLoggedIn, isOwner, asyncWarp(listingController.deleteGalleryImage));

module.exports = router;