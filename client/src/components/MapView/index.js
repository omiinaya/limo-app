import React, { useEffect } from 'react';
import { getMidpoint } from "../../scripts"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
//import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

var mapboxgl = require('mapbox-gl');
//const MapboxGeocoder = window.MapboxGeocoder

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

//use props and ref to attach to another div
export default function App(props) {
    console.log(props)

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
            zoom: 13,
            attributionControl: false,
        });

        setMapObj((prev) => prev = map)

        geocoder.addTo('#geocoder')
        geocoder2.addTo('#geocoder2')

        //pickup element
        var pickEl = document.getElementById('geocoder').querySelector(".mapboxgl-ctrl-geocoder--input")
        pickEl.addEventListener("input", () => props.handleChangePickup(pickEl.value));

        //dropoff element
        var dropEl = document.getElementById('geocoder2').querySelector(".mapboxgl-ctrl-geocoder--input")
        dropEl.addEventListener("input", () => props.handleChangeDropoff(dropEl.value));

        //observing change in height to fix map sizing issue.
        const myObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                console.log('width', entry.contentRect.width);
                console.log('height', entry.contentRect.height);
                map.resize()
            });
        });
        const targetNode = document.getElementById('map')
        myObserver.observe(targetNode)
    }, []);

    //updates location every time pickup state is changed.
    useEffect(() => {
        console.log(pickup)
        if (pickup.length > 1) {
            updateLocation(pickup)
            addMarker(pickup)
        }
    }, [pickup]);

    //updates location every time dropoff state is changed
    useEffect(() => {
        if (dropoff.length > 1 && pickup.length > 1) {
            var mid = getMidpoint(pickup[0], pickup[1], dropoff[0], dropoff[1])
            updateLocation(mid)
            addMarker(dropoff)
        } else if (dropoff.length > 1) {
            updateLocation(dropoff)
            addMarker(dropoff)
        } else {
            return
        }
    }, [dropoff]);

    useEffect(() => {
        if (props.currentPickup) {
            console.log(props.currentPickup)
            setPickup(props.currentPickup)
            updateLocation(props.currentPickup)
            addMarker(props.currentPickup)
        }
    }, [props.currentPickup]);

    useEffect(() => {
        if (props.currentDropoff) {
            console.log(props.currentDropoff)
            setDropoff(props.currentDropoff)
            updateLocation(props.currentDropoff)
            addMarker(props.currentDropoff)
        }
    }, [props.currentDropoff]);

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    const geocoder2 = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    function addMarker(coordinates) {
        new mapboxgl.Marker(marker).setLngLat(coordinates).addTo(mapObj);
    }

    function updateLocation(coordinates) {
        mapObj.flyTo({
            center: coordinates,
            essential: true
        })
        
    }

    geocoder.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        console.log(e.result.geometry)
        setPickup(prev => prev = [lat, long])
    });

    geocoder2.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        setDropoff(prev => prev = [lat, long])
        console.log(lat, long)
    });

    const testing = () => {
        console.log(pickup)
        console.log(mapObj)
    }

    return (
        <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
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