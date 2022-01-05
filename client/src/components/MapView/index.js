import React from 'react'
import MapPicker from 'react-google-map-picker'
//[25.6513512, -80.41268649999999]
const MapView = (props) => {
    var lat = 25.6513512//props.location[0]
    var lng = -80.41268649999999//props.location[1]
    
    var location = { lat, lng }

    return (
        <MapPicker
            defaultLocation={location}
            zoom={10}
            mapTypeId="roadmap"
            style={{ height: '100%' }}
            disableDoubleClickZoom={true}
            gestureHandling='greedy'
            draggable={true}
            disableDefaultUI={true}
            apiKey={process.env.REACT_APP_MAPSKEY} />
    );
}

export default MapView