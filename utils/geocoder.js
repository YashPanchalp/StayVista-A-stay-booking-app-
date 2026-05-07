const NodeGeocoder = require('node-geocoder');

const geocoder = NodeGeocoder({
    provider: 'openstreetmap',
    timeout: 5000
});

// Function to get coordinates from location string
module.exports.getCoordinates = async (location, country) => {
    try {
        const searchQuery = country ? `${location}, ${country}` : location;
        const res = await geocoder.geocode(searchQuery);
        
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
