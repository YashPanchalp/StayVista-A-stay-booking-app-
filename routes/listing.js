const express = require("express");
const router = express.Router();

//------------all requirement -----
const ExpressError = require("../utils/ExpressError.js");
const asyncWarp = require("../utils/asyncWrap().js");
const { listingSchema } = require("../schema.js")
const Listing = require("../models/listing.js")
//----------------------------------

const flashListingNotFound = (req, res) => {
  req.flash("error", "Listing requested is not found.");
  res.redirect("/listings");
};

//--------validation method---------
//Joi -> shcema validation middleware
const validateListing = (req,res,next)=> {
  let {error} = listingSchema.validate(req.body);

  if(error){
    let errMsg = error.details.map( (ele) => ele.message).join(",");
    throw new ExpressError(400,errMsg);
  } else{
    next();
  }
}


//-------all routers with value "/listings"------
//(1)index -listing routes
router.get("/" , 
  asyncWarp(async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index",{allListings})
}));

//written before bec "new" can consider as :id from second route
//(3)new listing - new and create routes
router.get("/new" , (req,res) => {
  res.render("listings/new")
})

//(2)show - read all data from title 
router.get("/:id" , 
  asyncWarp(async (req,res) => {
  //get the id of the data from req and then search all items for it
  let {id} = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if(!listing) {
    return flashListingNotFound(req, res);
  }
  
  res.render("listings/show" , {listing});
}));

//(4)Create - new listing save and add
router.post("/" ,
  validateListing,
  asyncWarp(async (req,res) => {
  //from name acess them from req body -> where names are as object listing.value
  //create new listing 
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  //flash message
  req.flash("success","New Stay Added sucessfully!")
  res.redirect("/listings");
//   {
//   listing: {
//     title: 'taj goa',
//     description: 'sea side property',
//     image: 'taj-goa.jpeg',
//     price: '16000',
//     country: 'India',
//     location: 'Goa'
//   }
// }
}));

///(5)Edit Route - To edit Listings
router.get("/:id/edit" , 
  asyncWarp ( async (req,res) => {
  //get the id and load the listing
  let {id} = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    return flashListingNotFound(req, res);
  }
  res.render("listings/edit" , {listing});

}));

//(6)Update Route - To update value in db and show
router.put("/:id", 
  asyncWarp (async (req,res) => {
  let {id} = req.params;
  //from this id we can find and update values from :: listing object of req body
  await Listing.findByIdAndUpdate(id , {...req.body.listing});
  //flash message
  req.flash("success", "The Stay details updated!")
  res.redirect(`/listings/${id}`);
}));

//(7) Delete route - Delete Listing
router.delete("/:id" , 
  asyncWarp ( async (req,res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  //falsh message
  req.flash("success","Stay has been deleted!")
  res.redirect("/listings");
}));

module.exports = router;