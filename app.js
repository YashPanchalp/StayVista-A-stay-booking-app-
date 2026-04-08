const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('node:path')
const ejsMate = require("ejs-mate");

//importing files
const Listing = require("./models/listing.js")
//method over ride -> npm i method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

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
    res.send("Hello World");
});

//(1)index -listing routes
app.get("/listings" , async (req,res) => {
  const allListings = await Listing.find({});
  res.render("listings/index",{allListings})
});

//written before bec "new" can consider as :id from second route

//(3)new listing - new and create routes
app.get("/listings/new" , (req,res) => {
  res.render("listings/new")
})

//(2)show - read all data from title 
app.get("/listings/:id" , async (req,res) => {
  //get the id of the data from req and then search all items for it
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show" , {listing});
});

//(4)Create - new listing save and add
app.post("/listings" ,async (req,res) => {
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
})

///(5)Edit Route - To edit Listings
app.get("/listings/:id/edit" , async (req,res) => {
  //get the id and load the listing
  let {id} = req.params;
  const listing = await Listing.findById(id);

  res.render("listings/edit" , {listing});

})

//(6)Update Route - To update value in db and show
app.put("/listings/:id", async (req,res) => {
  let {id} = req.params;
  //from this id we can find and update values from :: listing object of req body
  await Listing.findByIdAndUpdate(id , {...req.body.listing});
  res.redirect(`/listings/${id}`);
})

//(7) Delete route - Delete Listing
app.delete("/listings/:id" , async (req,res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
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