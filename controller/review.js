const Review = require("../models/review")
const Listing = require("../models/listing")

module.exports.createReview = async(req,res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id; //add the author info
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  
  req.flash("success", "Thank you! Your review has been added.");
  res.redirect(`/listings/${listing._id}`);
}

module.exports.deleteReview =  async(req,res) => {
    let { id , reviewId} = req.params;

    //delete from listing -> reviews id : id and the whole review in Review
    //$pull -> pull out and delete the review where _id = reviewId in reviews array
    await Listing.findByIdAndUpdate(id, {$pull : { reviews:reviewId }});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Your review has been successfully removed.");

    res.redirect(`/listings/${id}`);
  }