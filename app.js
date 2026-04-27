const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('node:path')
const ejsMate = require("ejs-mate");
//importing files
const Listing = require("./models/listing.js")
const Review = require("./models/review.js")
const { listingSchema } = require("./schema.js")
const { reviewSchema } = require("./schema.js")

//method over ride -> npm i method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const ExpressError = require("./utils/ExpressError.js");
const asyncWarp = require("./utils/asyncWrap().js");
const { throws } = require("node:assert");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect to MongoDB
main().then(() => {
  console.log("Database connection established");
}).catch((err) => {
  console.error("Database connection error:", err);
});
async function main() {
  await mongoose.connect(MONGO_URL);
}

//path set and ejs
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))

app.get("/" , (req, res) => {
  res.render("home");
});

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

const validateReview = (req,res,next)=> {
  let {error} = reviewSchema.validate(req.body);

  if(error){
    let errMsg = error.details.map( (ele) => ele.message).join(",");
    throw new ExpressError(400,errMsg);
  } else{
    next();
  }
}

//(1)index -listing routes
app.get("/listings" , 
  asyncWarp(async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index",{allListings})
}));

//written before bec "new" can consider as :id from second route

//(3)new listing - new and create routes
app.get("/listings/new" , (req,res) => {
  res.render("listings/new")
})

//(2)show - read all data from title 
app.get("/listings/:id" , 
  asyncWarp(async (req,res) => {
  //get the id of the data from req and then search all items for it
  let {id} = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("listings/show" , {listing});
}));

//(4)Create - new listing save and add
app.post("/listings" ,
  validateListing,
  asyncWarp(async (req,res) => {
  //from name acess them from req body -> where names are as object listing.value
  //create new listing 
  const newListing = new Listing(req.body.listing);
  await newListing.save();
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
app.get("/listings/:id/edit" , 
  asyncWarp ( async (req,res) => {
  //get the id and load the listing
  let {id} = req.params;
  const listing = await Listing.findById(id);

  res.render("listings/edit" , {listing});

}));

//(6)Update Route - To update value in db and show
app.put("/listings/:id", 
  asyncWarp (async (req,res) => {
  let {id} = req.params;
  //from this id we can find and update values from :: listing object of req body
  await Listing.findByIdAndUpdate(id , {...req.body.listing});
  res.redirect(`/listings/${id}`);
}));

//(7) Delete route - Delete Listing
app.delete("/listings/:id" , 
  asyncWarp ( async (req,res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));

//(8) Reviews -> Post route
app.post("/listings/:id/reviews" , 
  validateReview,
  asyncWarp ( async(req,res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();
  res.redirect(`/listings/${listing._id}?success=true`);
}))

//not found page route
app.all(/.*/ , (req,res,next) => {
  throw new ExpressError(404,"Page not found");
})

//error handle middle ware of Express Error class
app.use((err,req,res,next) => {
  let {statusCode = 500 , message = "Something went wrong!"} = err;
  res.status(statusCode).send(message);
})
 

// //model-1 Listing
// app.get("/testListing" , async (req,res) => {
//   let sampleListing = new Listing({
//       title : "My new villa",
//       description : "By the beach",
//       price: "1200",mongod
//       location : "Anjuna , Goa",
//       country : "India",
//   });

//   await sampleListing.save();
//   console.log("sucessfully saved")
//   res.send("test sucess")
// })

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});