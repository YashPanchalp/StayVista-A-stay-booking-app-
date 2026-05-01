const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./review");

const listingSchema = new Schema({
    title: {
        type: String,
        required:true, 
    },

    description: {
        type: String,
    },
    image: {
        filename: {
            type: String,
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
            set : (v) => v == "" ? "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww" : v,
        }
    },
    price: {
        type: Number,
    },
    location:{
        type: String,
    }, 
    country:{
        type: String,
    },
    //passing reviews as the object id
    reviews:[{
        type : Schema.Types.ObjectId,
        ref : "Review",
    }]
});
        
//middleware to called when any listing deleted -> delete reviews
//from findByIdAndDelete -> conveted as findOneAndDelete
listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
    await Review.deleteMany( { _id: { $in: listing.reviews}});
  }
})

//model1-> listing (model) apply shcema
const Listing = mongoose.model("Listing",listingSchema);
//export the model
module.exports = Listing;