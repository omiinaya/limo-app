import React, { useRef, useEffect, useState } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const mapboxgl = window.mapboxgl
const MapboxGeocoder = window.MapboxGeocoder
const turf = window.turf

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

//use props and ref to attach to another div
export default function App() {
    const [pickup, setPickup] = React.useState(0);
    const [dropoff, setDropoff] = React.useState(0);

    var test

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-83.093, 42.376],
            zoom: 13
        });

        test = map

        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
        document.getElementById('geocoder2').appendChild(geocoder2.onAdd(map));

        map.on('load', async () => {
            const marker = document.createElement('div');
            marker.classList = 'truck';

            new mapboxgl.Marker(marker).setLngLat(warehouseLocation).addTo(test);
        });

    }, []);

    const warehouseLocation = [-83.093, 42.376]

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    const geocoder2 = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    geocoder.on('result', (e) => {
        console.log(JSON.stringify(e.result, null, 2))
        console.log(test)

        
    });

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div id="map" style={{
                width: '100%',
                height: 'auto',
            }}></div>
        </div>
    );
}