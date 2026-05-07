# Google Maps Integration Setup Guide

## Overview
This implementation adds Google Maps with location display and GeoJSON coordinate storage to your AirBnb application. Properties are automatically geocoded when created or updated, storing coordinates for persistent access.

## What Was Implemented

### 1. **Database Model Enhancement**
- **File:** `models/listing.js`
- **Change:** Added `geometry` field with GeoJSON format (Point type)
- **Structure:**
  ```javascript
  geometry: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number] // [longitude, latitude]
  }
  ```

### 2. **Geocoding Utility**
- **File:** `utils/geocoder.js` (NEW)
- **Functionality:** 
  - Converts location strings to latitude/longitude coordinates
  - Uses OpenStreetMap (free, no API key needed)
  - Automatically called when listings are created/updated
  - Stores coordinates in GeoJSON format

### 3. **Controller Updates**
- **File:** `controller/listing.js`
- **Changes:**
  - Import geocoder utility
  - Auto-geocode on `createListing()` - converts location + country to coordinates
  - Auto-geocode on `updateListing()` - only if location/country changes
  - Graceful fallback to [0, 0] if geocoding fails

### 4. **Frontend Map Display**
- **File:** `views/listings/show.ejs`
- **Features:**
  - Map displays after gallery section
  - Shows property location with custom red marker
  - Interactive info window with property details
  - Keyboard shortcuts (arrow keys to navigate, ESC to close)
  - GeoJSON data available in browser console for export
  - Displays formatted coordinates (latitude/longitude)

### 5. **Map API Integration**
- **File:** `views/layouts/boilerplate.ejs`
- **Addition:** Google Maps API script tag

## Installation Steps

### Step 1: Install Node Geocoder Package

```bash
npm install node-geocoder
```

### Step 2: Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the **Maps JavaScript API**
4. Create an API key (Credentials → Create Credentials → API Key)
5. Restrict the key to JavaScript origins and your domain

### Step 3: Add API Key to Boilerplate

Replace `YOUR_GOOGLE_MAPS_API_KEY` in `views/layouts/boilerplate.ejs`:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY"></script>
```

### Step 4: Restart Application

```bash
npm start
```

## How It Works

### Creating/Updating Listings

1. **User Creates Listing**
   - Fills in location and country (e.g., "Paris", "France")
   - Controller receives data

2. **Automatic Geocoding**
   - Geocoder converts "Paris, France" → coordinates [2.3522, 48.8566]
   - Coordinates stored in database as GeoJSON

3. **Map Display**
   - When viewing listing, map automatically renders
   - Marker placed at geocoded location
   - Coordinates displayed in human-readable format

### GeoJSON Format

The application stores coordinates in standard GeoJSON format:

```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  }
}
```

**Note:** GeoJSON uses [longitude, latitude] order (opposite of typical usage)

## Usage Examples

### View Map on Listing
Simply navigate to any listing detail page - the map will auto-initialize with the property location.

### Access GeoJSON in Browser Console
When viewing a listing with a map, you can access the GeoJSON data:

```javascript
console.log(window.listingGeoJSON);
// Output:
// {
//   type: 'Feature',
//   properties: { title, location, country, price, description },
//   geometry: { type: 'Point', coordinates: [lng, lat] }
// }
```

### Export Locations (Future Enhancement)
All coordinates are stored in GeoJSON format, making it easy to:
- Export listings as GeoJSON files
- Integrate with mapping tools
- Build location-based search
- Create heatmaps

## API Details

### Geocoding Provider: OpenStreetMap
- **Free** - no API key required for geocoder
- **Reliable** - covers worldwide locations
- **Timeout** - 5 seconds per request
- **Fallback** - defaults to [0, 0] if geocoding fails

### Google Maps Display
- **Map Type:** JavaScript Maps API
- **Features:** Pan, zoom, street view, fullscreen
- **Styling:** Styled with light gray theme
- **Markers:** Custom red circular markers with shadow

## Features

✅ **Automatic Geocoding** - No manual coordinate entry needed  
✅ **GeoJSON Storage** - Standard format for location data  
✅ **Interactive Map** - Zoom, pan, street view controls  
✅ **Info Windows** - Property details on marker click  
✅ **Error Handling** - Graceful fallback if geocoding fails  
✅ **Responsive Design** - Works on mobile and desktop  
✅ **Data Export Ready** - GeoJSON available for export  

## Troubleshooting

### Map Not Showing
- Verify Google Maps API key is correct and enabled
- Check browser console for errors
- Ensure coordinates are not [0, 0]

### Geocoding Failing
- Verify location and country are spelled correctly
- Check internet connection
- OpenStreetMap may be temporarily unavailable

### Coordinates Showing as [0, 0]
- This is the fallback when geocoding fails
- Try editing listing with different location text
- Clear listing and recreate with full address

## Database Query Example

Get all listings with their GeoJSON data:

```javascript
Listing.find({}).select('title location geometry');
// Returns documents with coordinates ready for mapping
```

## Future Enhancements

1. **Batch Geocoding** - Pre-geocode existing listings
2. **Multiple Markers** - Show nearby listings on map
3. **Heatmaps** - Visualize popularity by location
4. **Search by Radius** - Find listings within distance
5. **GeoJSON Export** - Download all properties as GeoJSON file

## File Structure Summary

```
project/
├── models/
│   └── listing.js (UPDATED - added geometry field)
├── controller/
│   └── listing.js (UPDATED - added geocoding)
├── utils/
│   └── geocoder.js (NEW)
├── views/
│   ├── listings/
│   │   └── show.ejs (UPDATED - added map section & script)
│   └── layouts/
│       └── boilerplate.ejs (UPDATED - added Google Maps API)
└── package.json (needs: npm install node-geocoder)
```

## Dependencies Added
- `node-geocoder` - For converting locations to coordinates

## No Breaking Changes
- Existing listings work without modification
- Backward compatible with current data structure
- Graceful fallback for missing coordinates

---

**Setup Time:** ~5 minutes  
**Complexity:** Low  
**Maintenance:** Minimal (automatic process)
