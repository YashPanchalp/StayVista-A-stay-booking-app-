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
const session = require("express-session");
const flash = require("connect-flash");
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");

//----------------------------------------------------------

//----------------path set and ejs------------
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride("_method"));
//-------------------------------------------

//----------express session define ------
const sessionOptions = {
   secret : "mysupersecretcode", //async
   resave : false,
   saveUninitialized: true,

   cookie: {
    expires:Date.now()* 7 *  24 * 60 * 60 * 1000, //7days
    maxAge : 7 *  24 * 60 * 60 * 1000,
    httpOnly: true
   }
}

app.use(session(sessionOptions));
app.use(flash());

//configure passport strategy for info stored in session and same for the added user
app.use(passport.initialize());
passport.session(); //each time in same browser no need to login
passport.use(new LocalStrategy(User.authenticate()));
//save info into session or remove
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
//--------------------------------------


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


// //demo User
// app.get("/demouser", async (req,res) => {
//   let fakeUser = new User({
//     email : "student@gmail.com",
//     username : "delta-student",
//   })

//   //register() => static method that auto initialize unique usernames to store in db and takes username , info and callback
//   let registeredUser = await User.register(fakeUser,"hellowworld");
//   res.send(registeredUser);
// })


//All the Listing Routes-----------
const listingRouter = require("./routes/listing.js");
app.use("/listings" , listingRouter);

//All Review Routes-----------------
const reviewRouter = require("./routes/review.js");
app.use("/listings/:id/reviews" , reviewRouter);

//All Sign in / up Routes ------------
const userRouter = require("./routes/user.js");
app.use("/", userRouter);


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