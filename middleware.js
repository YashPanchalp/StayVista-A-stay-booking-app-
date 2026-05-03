const Listing = require("./models/listing");
const Review = require("./models/review.js")
const { listingSchema } = require("./schema.js")
const ExpressError = require("./utils/ExpressError.js");
const { reviewSchema } = require("./schema.js");


//if user logged in then only perfrom or acess routes 
module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        //if user not logged in while requestedsome path -> save the prev req path in session
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to perform this action!");
        return res.redirect("/login");
    }
    next();
} 

//the passport reset the session after login / logout -> chances to deleted originalUrl
module.exports.savedRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
} 

module.exports.isOwner = async (req,res,next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
      if(!listing.owner[0]._id.equals(res.locals.currentUser._id)){
        req.flash('error', "You are not th owner of the listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
    
}

module.exports.isReviewAuthor = async (req,res,next) => {
    let { id , reviewId } = req.params;
    let review = await Review.findById(reviewId);
      if(!review.author.equals(res.locals.currentUser._id)){
        req.flash('error', "You have not created this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
    
}

//--------validation method---------
//Joi -> shcema validation middleware

//(1) validateListing before saving 
module.exports.validateListing = (req,res,next)=> {
  let {error} = listingSchema.validate(req.body);

  if(error){
    let errMsg = error.details.map( (ele) => ele.message).join(",");
    throw new ExpressError(400,errMsg);
  } else{
    next();
  }
}

//(2) validateReview before saving 
module.exports.validateReview = (req,res,next)=> {
  let {error} = reviewSchema.validate(req.body);

  if(error){
    let errMsg = error.details.map( (ele) => ele.message).join(",");
    throw new ExpressError(400,errMsg);
  } else{
    next();
  }
}