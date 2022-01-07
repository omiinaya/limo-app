import React, { useRef, useEffect, useState } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const mapboxgl = window.mapboxgl
const MapboxGeocoder = window.MapboxGeocoder

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

//use props and ref to attach to another div
export default function App() {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.4512, 43.6568],
            zoom: 13
        });
        document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
    }, []);

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <div id="map" style={{
                width: '100%', 
                height: 'auto',
                
                
                }}></div>

            <div id="geocoder" class="geocoder"></div>
        </div>
    );
}