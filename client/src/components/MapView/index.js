import React, { useRef, useEffect, useState } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const mapboxgl = window.mapboxgl
const MapboxGeocoder = window.MapboxGeocoder
const turf = window.turf

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

//use props and ref to attach to another div
export default function App(props) {
    const [mapObj, setMapObj] = React.useState(0)
    const [pickup, setPickup] = React.useState([]);
    const [dropoff, setDropoff] = React.useState([]);

    const marker = document.createElement('div');
    marker.classList = 'truck';

    //executes before anything else is loaded
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-83.093, 42.376],
            zoom: 13
        });

        setMapObj(map)

        geocoder.addTo('#geocoder');
        geocoder2.addTo('#geocoder2')

    }, []);

    //updates location every time location state is changed.
    useEffect(() => {
        console.log(pickup)
        if (pickup.length > 1) {
            updateLocation(pickup[0], pickup[1])
        }
    }, [pickup]);

    useEffect(() => {
        console.log(dropoff)
        if (dropoff.length > 1) {
            updateLocation(dropoff[0], dropoff[1])
        }
    }, [dropoff]);

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    const geocoder2 = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    function updateLocation(lat, long) {
        console.log(lat, long)
        
        new mapboxgl.Marker(marker).setLngLat([lat, long]).addTo(mapObj);
        mapObj.flyTo({
            center: [lat, long],
            essential: true
        })
        console.log(dropoff)
        console.log(pickup)
        console.log(mapObj)
        
    }

    geocoder.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        setPickup([lat, long])
        console.log(lat, long)
    });

    geocoder2.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        setDropoff([lat, long])
        console.log(lat, long)
    });

    const testing = () => {
        console.log(pickup)
        console.log(mapObj)
    }

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div id="map"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                onClick={testing}
            ></div>
        </div>
    );
}