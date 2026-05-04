//------------require ------------------------------
const express = require("express");
const router = express.Router();
const User = require("../models/user");
const asyncWarp = require("../utils/asyncWrap()")
const flash = require("connect-flash")
const passport = require("passport")
const {savedRedirectUrl} = require("../middleware.js");
const userController = require("../controller/user.js")
//-----------------------------------------------

//---------SignUp Routes---------------------
//Form loaded from get req then info added and stored with the post

router.get("/signup", userController.renderSignUpForm);

router.post("/signup", userController.signup);

//---------Login Routes---------------------
//Form loaded from get req then info added and stored with the post

router.get("/login", userController.renderLoginForm)

//add passport.authenticate(strategy, failureRedirect : when fails which route to navigate , flashmsg)
//middleware for authentication - if no error then excute next
router.post("/login" ,
   savedRedirectUrl, //save the prec req -> redirect url to res.locals before login and it was deleted
   passport.authenticate("local", 
   {failureRedirect : '/login',
       failureFlash : true
   }),
   userController.login
 )

router.get("/logout" , userController.logout)


module.exports = router;