#!/usr/bin/env node

/**
 * Cloudinary Configuration Test Script
 * Run with: node cloudinary-test.js
 * 
 * This script validates your Cloudinary configuration
 * and tests the connection before running the application.
 */

require("dotenv").config();

const cloudinary = require("cloudinary").v2;

console.log("\n📋 Cloudinary Configuration Test\n");
console.log("================================\n");

// Test 1: Check environment variables
console.log("✓ Test 1: Checking environment variables...");
const required = {
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
};

let allPresent = true;
for (const [key, value] of Object.entries(required)) {
  if (value) {
    console.log(`  ✓ ${key} is set`);
  } else {
    console.log(`  ✗ ${key} is MISSING`);
    allPresent = false;
  }
}

if (!allPresent) {
  console.log("\n❌ Missing Cloudinary credentials!");
  console.log("\nPlease add these to your .env file:");
  console.log("  CLOUDINARY_CLOUD_NAME=your_cloud_name");
  console.log("  CLOUDINARY_API_KEY=your_api_key");
  console.log("  CLOUDINARY_API_SECRET=your_api_secret\n");
  process.exit(1);
}

console.log("\n✓ All environment variables present!\n");

// Test 2: Configure Cloudinary
console.log("✓ Test 2: Configuring Cloudinary...");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log(`  Cloud Name: ${cloudinary.config().cloud_name}\n`);

// Test 3: Test API connection
console.log("✓ Test 3: Testing API connection...");
cloudinary.api.ping((error, result) => {
  if (error) {
    console.log(`  ✗ API Connection Failed: ${error.message}`);
    console.log("\n❌ Cloudinary API connection failed!");
    console.log("Please verify your credentials.\n");
    process.exit(1);
  }

  console.log(`  ✓ API Connection Successful!`);
  console.log(`  Response: ${result.message}\n`);

  // Test 4: Check folder structure
  console.log("✓ Test 4: Verifying folder 'airbnb-listings'...");
  cloudinary.api.resources({
    type: "upload",
    prefix: "airbnb-listings",
    max_results: 1
  }, (error, result) => {
    if (error) {
      console.log(`  ℹ Folder doesn't exist yet (will be created on first upload)\n`);
    } else {
      console.log(`  ✓ Folder 'airbnb-listings' exists`);
      console.log(`  Resources in folder: ${result.resources.length}\n`);
    }

    // Test 5: Summary
    console.log("================================");
    console.log("✅ All tests passed!\n");
    console.log("Your Cloudinary configuration is ready to use.");
    console.log("You can now start your application with: npm start\n");
    process.exit(0);
  });
});
