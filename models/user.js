const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose").default;

//passportLocalMongoose - will auto add username and passwords no need to add in schema
//it also adds the hash + salt fields 
const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    }
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);