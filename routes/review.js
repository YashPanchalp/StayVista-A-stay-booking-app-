const express = require("express");
const router = express.Router({mergeParams:true});

//-----------require alll-------
const ExpressError = require("../utils/ExpressError.js");
const asyncWarp = require("../utils/asyncWrap().js");
const { listingSchema } = require("../schema.js")
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js")
const {isLoggedIn} = require("../middleware.js")

//------------------------------

//------------validation mathod --------
const validateReview = (req,res,next)=> {
  let {error} = reviewSchema.validate(req.body);

  if(error){
    let errMsg = error.details.map( (ele) => ele.message).join(",");
    throw new ExpressError(400,errMsg);
  } else{
    next();
  }
}
//--------------------------------------

//-------all routes with "listings/:id/reviews"---------
//(8) Reviews -> Post route
router.post("/" , 
  isLoggedIn,
  validateReview,
  asyncWarp ( async(req,res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  
  req.flash("success", "Thank you! Your review has been added.");
  res.redirect(`/listings/${listing._id}`);
}));

//(9) Delete Review -> by segrigate the id
router.delete("/:reviewId" ,
  isLoggedIn,
  asyncWarp ( async(req,res) => {
    let { id , reviewId} = req.params;

    //delete from listing -> reviews id : id and the whole review in Review
    //$pull -> pull out and delete the review where _id = reviewId in reviews array
    await Listing.findByIdAndUpdate(id, {$pull : { reviews:reviewId }});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Your review has been successfully removed.");

    res.redirect(`/listings/${id}`);
  })
);
//-----------------------------------------
module.exports = router;