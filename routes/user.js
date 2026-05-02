//------------require ------------------------------
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const asyncWarp = require("../utils/asyncWrap()")
const flash = require("connect-flash")
const passport = require("passport")
const {savedRedirectUrl} = require("../middleware.js");
//-----------------------------------------------

//---------SignUp Routes---------------------
//Form loaded from get req then info added and stored with the post

router.get("/signup", (req,res) => {
    res.render("users/signup.ejs")
})

router.post("/signup", async (req,res) => {

   try {
   let {username , email , password} = req.body;
    const newUser = new User({ username, email });
   //register() => static method that auto initialize unique usernames to store in db and takes username , info and callback
   const registeredUser = await User.register(newUser , password);
   console.log(registeredUser);
   req.login(registeredUser, (err) => {
       if (err) {
           return next(err);
       }
       req.flash("success" , "Welcome to StayVista! Your account has been created.");
       res.redirect("/listings");
   });
   }
   catch(err){
      req.flash("error" , err.message);
      res.redirect("/signup");
   }
})

//---------Login Routes---------------------
//Form loaded from get req then info added and stored with the post

router.get("/login", (req,res) => {
    res.render("users/login.ejs");
})

//add passport.authenticate(strategy, failureRedirect : when fails which route to navigate , flashmsg)
//middleware for authentication - if no error then excute next
router.post("/login" ,
    savedRedirectUrl, //save the prec req -> redirect url to res.locals before login and it was deleted
    passport.authenticate("local", 
    {failureRedirect : '/login',
       failureFlash : true
    }),
       async (req,res) => {
       req.flash("success", "Welcome back! You have successfully logged in.");
       console.log("Login done")
       let redirectUrl = res.locals.redirectUrl || "/listings";
       res.redirect(redirectUrl);
})

router.get("/logout" ,(req,res) => {
   //to logout user and if any err ouccured recieve as callback
   req.logout((err) => {
      if(err) return next(err);

      req.flash("success" , "You have been logged out")
      console.log("Logout done")
      res.redirect("/listings")
   })
})


module.exports = router;