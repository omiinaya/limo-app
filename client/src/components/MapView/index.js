import React, { useRef, useEffect, useState } from 'react';
//import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const mapboxgl = window.mapboxgl
const MapboxGeocoder = window.MapboxGeocoder

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

export default function App() {
    console.log(window)
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
        <div>
            <div id="map"></div>

            <div id="geocoder" class="geocoder"></div>
        </div>
    );
}