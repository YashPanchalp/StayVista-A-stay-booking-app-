const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//one to many relation with listing : passing the Review as object id in Listing
const reviewSchema = new Schema({

    comment : String,
    rating : {
        type: Number,
        min : 0,
        max : 5
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model("Review",reviewSchema);

