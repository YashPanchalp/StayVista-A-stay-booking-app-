require("dotenv").config();
const mongoose = require("mongoose");
const geocoder = require("./utils/geocoder.js");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function updateCoordinates() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
        
        const listings = await Listing.find({});
        console.log(`Found ${listings.length} listings in DB.`);
        
        for (let listing of listings) {
            // Only update if coordinates are very close to 0,0 
            if (Math.abs(listing.geometry.coordinates[0]) <= 0.0001 && Math.abs(listing.geometry.coordinates[1]) <= 0.0001) {
                let queryCountry = listing.country || "";
                console.log(`Geocoding ${listing.location}, ${queryCountry}...`);
                const res = await geocoder.getCoordinates(listing.location, queryCountry);
                
                if (res.success && (res.geometry.coordinates[0] !== 0 || res.geometry.coordinates[1] !== 0)) {
                    listing.geometry = res.geometry;
                    await listing.save();
                    console.log(`✅ Updated ${listing.title} -> [${res.geometry.coordinates}]`);
                } else {
                    console.log(`❌ Failed to find coordinates for ${listing.title}`);
                }
                
                // 1.5 second delay to avoid Nominatim (OpenStreetMap) rate limits (1 req/s)
                await new Promise(r => setTimeout(r, 1500));
            }
        }
        
    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.disconnect();
        console.log("Finished updating!");
    }
}

updateCoordinates();