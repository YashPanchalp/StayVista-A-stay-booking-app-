const Listing = require("../models/listing");
const { processAllImages } = require("../utils/imageProcessor.js");
const { getCoordinates } = require("../utils/geocoder.js");

/**
 * Service for handling listing operations with geocoding and image processing
 */

// Create a new listing with geocoding and image processing
module.exports.createNewListing = async (listingData, userId, files) => {
    try {
        const newListing = new Listing(listingData);
        newListing.owner = userId;
        
        // Process and assign images
        const processedImages = processAllImages(files, null, []);
        newListing.image = processedImages.image;
        newListing.gallery = processedImages.gallery;
        
        // Geocode the location and store coordinates
        const coordinatesData = await getCoordinates(newListing.location, newListing.country);
        newListing.geometry = coordinatesData.geometry;
        
        await newListing.save();
        return { success: true, listing: newListing };
    } catch (error) {
        console.error("Error creating listing:", error);
        return { success: false, error: error.message };
    }
};

// Update an existing listing with geocoding and image processing
module.exports.updateExistingListing = async (listingId, updateData, files) => {
    try {
        // Find the listing first to preserve images if not updating
        const listing = await Listing.findById(listingId);
        if (!listing) {
            return { success: false, error: "Listing not found" };
        }
        
        // Process and assign images
        const processedImages = processAllImages(files, listing.image, listing.gallery || []);
        updateData.image = processedImages.image;
        updateData.gallery = processedImages.gallery;
        
        // Geocode the location if location or country has changed, or always do it if forcing an update
        if (updateData.location !== listing.location || updateData.country !== listing.country || true) {
            const coordinatesData = await getCoordinates(updateData.location, updateData.country);
            updateData.geometry = coordinatesData.geometry;
        }
        
        // Handle category unchecking (if array is undefined in body, set it to empty array)
        if (!updateData.category) {
            updateData.category = [];
        }

        // Update and save
        const updatedListing = await Listing.findByIdAndUpdate(listingId, updateData, { new: true });
        return { success: true, listing: updatedListing };
    } catch (error) {
        console.error("Error updating listing:", error);
        return { success: false, error: error.message };
    }
};

// Get all listings
module.exports.getAllListings = async (filterCategory = null) => {
    try {
        let query = {};
        if (filterCategory) {
            query.category = filterCategory;
        }
        const listings = await Listing.find(query);
        return { success: true, listings };
    } catch (error) {
        console.error("Error fetching listings:", error);
        return { success: false, error: error.message };
    }
};

// Get a single listing with populated references
module.exports.getListingById = async (listingId) => {
    try {
        const listing = await Listing.findById(listingId)
            .populate({
                path: "reviews",
                populate: "author"
            })
            .populate("owner");
        
        if (!listing) {
            return { success: false, error: "Listing not found" };
        }
        
        return { success: true, listing };
    } catch (error) {
        console.error("Error fetching listing:", error);
        return { success: false, error: error.message };
    }
};

// Delete a listing
module.exports.deleteListing = async (listingId) => {
    try {
        const deletedListing = await Listing.findByIdAndDelete(listingId);
        
        if (!deletedListing) {
            return { success: false, error: "Listing not found" };
        }
        
        return { success: true, listing: deletedListing };
    } catch (error) {
        console.error("Error deleting listing:", error);
        return { success: false, error: error.message };
    }
};

// Upload images for existing listing
module.exports.uploadListingImages = async (listingId, files) => {
    try {
        const listing = await Listing.findById(listingId);
        if (!listing) {
            return { success: false, error: "Listing not found" };
        }
        
        // Process and assign images
        const processedImages = processAllImages(files, listing.image, listing.gallery || []);
        listing.image = processedImages.image;
        listing.gallery = processedImages.gallery;
        
        await listing.save();
        return { success: true, listing };
    } catch (error) {
        console.error("Error uploading images:", error);
        return { success: false, error: error.message };
    }
};

// Delete main image
module.exports.deleteMainImage = async (listingId) => {
    try {
        const listing = await Listing.findById(listingId);
        if (!listing) {
            return { success: false, error: "Listing not found" };
        }
        
        listing.image = undefined;
        await listing.save();
        
        return { success: true, listing };
    } catch (error) {
        console.error("Error deleting main image:", error);
        return { success: false, error: error.message };
    }
};

// Delete gallery image by index
module.exports.deleteGalleryImage = async (listingId, imageIndex) => {
    try {
        const listing = await Listing.findById(listingId);
        if (!listing) {
            return { success: false, error: "Listing not found" };
        }
        
        const index = parseInt(imageIndex);
        if (listing.gallery && listing.gallery.length > index) {
            listing.gallery.splice(index, 1);
            await listing.save();
            return { success: true, listing };
        } else {
            return { success: false, error: "Image not found" };
        }
    } catch (error) {
        console.error("Error deleting gallery image:", error);
        return { success: false, error: error.message };
    }
};
