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