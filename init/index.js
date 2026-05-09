const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require ("../models/listing.js");


//connect to mongo
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
main()
  .then(() => {
    console.log("Database connection established");
  }).catch((err) => {
    console.error("Database connection error:", err);
});
async function main() {
  await mongoose.connect(MONGO_URL);
}

//initialize the databse 
const initiDb = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => (
    {
     ...obj,
     owner : "69f60816dcd848f4f3cb7068",
    }
   ));
   await Listing.insertMany(initData.data);//objects inside the data object
   console.log("data was initialized")
}

initiDb();
