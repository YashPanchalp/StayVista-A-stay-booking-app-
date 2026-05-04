const Listing = require("../models/listing");
const { processMainImage, processGalleryImages, processAllImages } = require("../utils/imageProcessor.js");

//if not found listing
const flashListingNotFound = (req, res) => {
  req.flash("error", "We couldn't find the requested listing.");
  res.redirect("/listings");
};

module.exports.index = async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index",{allListings})
}

module.exports.renderNewForm = (req,res) => {
  res.render("listings/new")
}

module.exports.showListing = async (req,res) => {
  //get the id of the data from req and then search all items for it
  let {id} = req.params;
  //from objectId of reviews and owner get all details using populate
  const listing = await Listing.findById(id)
                                .populate({path :"reviews",
                                           populate : "author"}) //nested populate to get author
                                .populate("owner");
  if(!listing) {
    return flashListingNotFound(req, res);
  }
  res.render("listings/show" , {listing});
}

module.exports.createListing  = async (req,res) => {
  //from name acess them from req body -> where names are as object listing.value
  //create new listing 
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id; //assign the owner's id to listing
  
  // Process and assign images using utility function
  const processedImages = processAllImages(req.files, null, []);
  newListing.image = processedImages.image;
  newListing.gallery = processedImages.gallery;
  
  await newListing.save();
  //flash message
  req.flash("success", "Your new StayVista listing has been published successfully.");
  res.redirect("/listings");
}

module.exports.renderEditFrom =  async (req,res) => {
  //get the id and load the listing
  let {id} = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    return flashListingNotFound(req, res);
  }
  res.render("listings/edit" , {listing});
}

module.exports.updateListing = async (req,res) => {
  let {id} = req.params;
  
  // Find the listing first to preserve images if not updating
  const listing = await Listing.findById(id);
  
  // Update listing data
  const updateData = {...req.body.listing};
  
  // Process and assign images using utility functions
  const processedImages = processAllImages(req.files, listing.image, listing.gallery || []);
  updateData.image = processedImages.image;
  updateData.gallery = processedImages.gallery;
  
  //from this id we can find and update values from :: listing object of req body
  await Listing.findByIdAndUpdate(id, updateData);
  //flash message
  req.flash("success", "Your listing details have been updated successfully.");
  res.redirect(`/listings/${id}`);
}

module.exports.deleteListing =  async (req,res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  //falsh message
  req.flash("success", "Your listing has been permanently removed.");
  res.redirect("/listings");
}

module.exports.renderUploadImagesForm = async (req,res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    return flashListingNotFound(req, res);
  }
  res.render("listings/upload-images", {listing});
}

module.exports.uploadListingImages = async (req,res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  
  if(!listing) {
    return flashListingNotFound(req, res);
  }
  
  // Process and assign images using utility functions
  const processedImages = processAllImages(req.files, listing.image, listing.gallery || []);
  listing.image = processedImages.image;
  listing.gallery = processedImages.gallery;
  
  await listing.save();
  req.flash("success", "HD images uploaded successfully for your listing!");
  res.redirect(`/listings/${id}`);
}

module.exports.deleteMainImage = async (req,res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  
  if(!listing) {
    return res.status(404).json({error: "Listing not found"});
  }
  
  // Delete main image
  listing.image = undefined;
  await listing.save();
  
  res.json({success: true, message: "Main image deleted successfully"});
}

module.exports.deleteGalleryImage = async (req,res) => {
  let {id, index} = req.params;
  const listing = await Listing.findById(id);
  
  if(!listing) {
    return res.status(404).json({error: "Listing not found"});
  }
  
  // Remove gallery image at specified index
  if (listing.gallery && listing.gallery.length > parseInt(index)) {
    listing.gallery.splice(parseInt(index), 1);
    await listing.save();
    res.json({success: true, message: "Gallery image deleted successfully"});
  } else {
    res.status(400).json({error: "Image not found"});
  }
}