const express = require("express");
const router = express.Router({mergeParams:true});

//-----------require alll-------
const ExpressError = require("../utils/ExpressError.js");
const asyncWarp = require("../utils/asyncWrap().js");
const { listingSchema } = require("../schema.js")
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js")
const {isLoggedIn , isReviewAuthor} = require("../middleware.js")
const {validateReview} = require("../middleware.js");
const reviewController = require("../controller/review.js")

//-------all routes with "listings/:id/reviews"---------
//(8) Reviews -> Post route
router.post("/" , isLoggedIn, validateReview, asyncWarp (reviewController.createReview));

//(9) Delete Review -> by segrigate the id
router.delete("/:reviewId" , isLoggedIn, isReviewAuthor, asyncWarp (reviewController.deleteReview));
//-----------------------------------------
module.exports = router;