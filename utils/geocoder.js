const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
    provider: 'openstreetmap',
    timeout: 5000
});

// Function to get coordinates from location string
module.exports.getCoordinates = async (location, country) => {
    try {
        const searchQuery = country ? `${location}, ${country}` : location;
        let res = await geocoder.geocode(searchQuery);
        
        // Fallback 1: Try without the country
        if ((!res || res.length === 0) && country) {
            console.log(`Geocoding failed for "${searchQuery}", falling back to "${location}"`);
            res = await geocoder.geocode(location);
        }
        
        // Fallback 2: Try with just the first part of the location (e.g. city name)
        if ((!res || res.length === 0) && location.includes(',')) {
            const firstPart = location.split(',')[0].trim();
            console.log(`Geocoding failed for "${location}", falling back to first part: "${firstPart}"`);
            res = await geocoder.geocode(firstPart);
        }
        
        if (res && res.length > 0) {
            const { latitude, longitude } = res[0];
            // GeoJSON format: [longitude, latitude]
            return {
                geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                success: true
            };
        } else {
            // Return default coordinates if geocoding fails
            return {
                geometry: {
                    type: 'Point',
                    coordinates: [0, 0]
                },
                success: false
            };
        }
    } catch (error) {
        console.error('Geocoding error:', error);
        // Return default coordinates on error
        return {
            geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            success: false
        };
    }
};
