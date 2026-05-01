//-------------------all imports ----------------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('node:path')
const ejsMate = require("ejs-mate");
//method over ride -> npm i method-override
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const asyncWarp = require("./utils/asyncWrap().js");
const { throws } = require("node:assert");
//----------------------------------------------------------

//----------------path set and ejs------------
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride("_method"));
//-------------------------------------------


// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main().then(() => {
  console.log("Database connection established");
}).catch((err) => {
  console.error("Database connection error:", err);
});
async function main() {
  await mongoose.connect(MONGO_URL);
}


// Middleware to pass current path to all templates
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

app.get("/" , (req, res) => {
  res.render("home");
});

//All the Listing Routes-----------
const listings = require("./routes/listing.js");
app.use("/listings" , listings);

//All Review Routes-----------------
const reviews = require("./routes/review.js");
app.use("/listings/:id/reviews" , reviews);


//not found page route
app.all(/.*/ , (req,res,next) => {
  throw new ExpressError(404,"Page not found");
})

//error handle middle ware of Express Error class
app.use((err,req,res,next) => {
  let {statusCode = 500 , message = "Something went wrong!"} = err;
  res.status(statusCode).send(message);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});