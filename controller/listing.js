const Listing = require("../models/listing");
const listingService = require("../services/listingService.js");

// Define categories list once
const CATEGORIES = ['Trending', 'Rooms', 'Iconic Cities', 'Mountains', 'Castles', 'Amazing Pools', 'Camping', 'Farms', 'Arctic'];

//if not found listing
const flashListingNotFound = (req, res) => {
  req.flash("error", "We couldn't find the requested listing.");
  res.redirect("/listings");
};

module.exports.index = async (req,res) => {
  const category = req.query.category;
  const result = await listingService.getAllListings(category);
  if (result.success) {
    res.render("listings/index", { allListings: result.listings, selectedCategory: category });
  } else {
    req.flash("error", "Error fetching listings");
    res.redirect("/listings");
  }
}

module.exports.searchListings = async (req,res) => {
  const location = req.query.location;
  if (!location || location.trim() === "") {
    req.flash("error", "Please enter a location to search.");
    return res.redirect("/listings");
  }
  
  const result = await listingService.searchByLocation(location);
  if (result.success) {
    res.render("listings/index", { 
      allListings: result.listings, 
      searchLocation: location,
      selectedCategory: null
    });
  } else {
    req.flash("error", "Error searching listings");
    res.redirect("/listings");
  }
}

module.exports.renderNewForm = (req,res) => {
  res.render("listings/new", { categories: CATEGORIES })
}

module.exports.showListing = async (req,res) => {
  let {id} = req.params;
  const result = await listingService.getListingById(id);
  
  if (!result.success) {
    return flashListingNotFound(req, res);
  }
  
  res.render("listings/show", { listing: result.listing });
}

module.exports.createListing = async (req,res) => {
  const result = await listingService.createNewListing(
    req.body.listing,
    req.user._id,
    req.files
  );
  
  if (result.success) {
    req.flash("success", "Your new StayVista listing has been published successfully.");
    res.redirect("/listings");
  } else {
    req.flash("error", result.error || "Error creating listing");
    res.redirect("/listings/new");
  }
}

module.exports.renderEditFrom = async (req,res) => {
  let {id} = req.params;
  const result = await listingService.getListingById(id);
  
  if (!result.success) {
    return flashListingNotFound(req, res);
  }
  
  res.render("listings/edit", { listing: result.listing, categories: CATEGORIES });
}

module.exports.updateListing = async (req,res) => {
  let {id} = req.params;
  
  const result = await listingService.updateExistingListing(
    id,
    req.body.listing,
    req.files
  );
  
  if (result.success) {
    req.flash("success", "Your listing details have been updated successfully.");
    res.redirect(`/listings/${id}`);
  } else {
    req.flash("error", result.error || "Error updating listing");
    res.redirect(`/listings/${id}/edit`);
  }
}

module.exports.deleteListing = async (req,res) => {
  let {id} = req.params;
  
  const result = await listingService.deleteListing(id);
  
  if (result.success) {
    req.flash("success", "Your listing has been permanently removed.");
    res.redirect("/listings");
  } else {
    req.flash("error", result.error || "Error deleting listing");
    res.redirect(`/listings/${id}`);
  }
}

module.exports.renderUploadImagesForm = async (req,res) => {
  let {id} = req.params;
  const result = await listingService.getListingById(id);
  
  if (!result.success) {
    return flashListingNotFound(req, res);
  }
  
  res.render("listings/upload-images", { listing: result.listing });
}

module.exports.uploadListingImages = async (req,res) => {
  let {id} = req.params;
  
  const result = await listingService.uploadListingImages(id, req.files);
  
  if (result.success) {
    req.flash("success", "HD images uploaded successfully for your listing!");
    res.redirect(`/listings/${id}`);
  } else {
    req.flash("error", result.error || "Error uploading images");
    res.redirect(`/listings/${id}/upload-images`);
  }
}

module.exports.deleteMainImage = async (req,res) => {
  let {id} = req.params;
  
  const result = await listingService.deleteMainImage(id);
  
  if (result.success) {
    res.json({success: true, message: "Main image deleted successfully"});
  } else {
    res.status(404).json({error: result.error});
  }
}

module.exports.deleteGalleryImage = async (req,res) => {
  let {id, index} = req.params;
  
  const result = await listingService.deleteGalleryImage(id, index);
  
  if (result.success) {
    res.json({success: true, message: "Gallery image deleted successfully"});
  } else {
    res.status(404).json({error: result.error});
  }
}