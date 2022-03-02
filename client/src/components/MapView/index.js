import React, { useEffect, useRef } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
//import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

//Northwest 175th Street, Hialeah, Florida 33015, United States

var mapboxgl = require('mapbox-gl');
//const MapboxGeocoder = window.MapboxGeocoder

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

//use props and ref to attach to another div
export default function App(props) {
    //console.log(props)

    const [mapObj, setMapObj] = React.useState(0)
    const [dirObj, setDirObj] = React.useState(0)
    const [pickup, setPickup] = React.useState([]);
    const [dropoff, setDropoff] = React.useState([]);
    const prevStop = usePrevious(props.stops);

    function usePrevious(value) {
        // The ref object is a generic container whose current property is mutable ...
        // ... and can hold any value, similar to an instance property on a class
        const ref = useRef();
        // Store current value in ref
        useEffect(() => {
            ref.current = value;
        }, [value]); // Only re-run if value changes
        // Return previous value (happens before update in useEffect above)
        return ref.current;
    }

    function updateListeners() {
        var stopsEl = document.querySelectorAll('.waypoint-geocoder')
        stopsEl.forEach(el => {
            var input = el.querySelector('.mapboxgl-ctrl-geocoder--input')
            input.addEventListener("input", () => console.log(input.value));
        })
    }

    function addGeocoders() {
        var waypoints = document.querySelectorAll('.waypoint-geocoder')
        waypoints.forEach((elem, index) => {
            if (index === waypoints.length - 1) {
                var x = new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                })
                x.addTo(elem)
                updateListeners()
            }
        })
    }

    //executes before anything else is loaded
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-83.093, 42.376],
            zoom: 13,
            attributionControl: false,
        });

        const directions = new MapboxDirections({
            accessToken: process.env.REACT_APP_MAP_KEY,
            unit: 'metric',
            profile: 'mapbox/driving',
            interactive: false,
            controls: {
                profileSwitcher: false,
                instructions: false,
                inputs: true
            }
        });

        //necessary for directions and waypoints to work
        map.addControl(directions, 'top-left');

        //states used to globalize variables
        setMapObj(map)
        setDirObj(directions)

        //adding geocoders to their respective dom elements
        geocoder.addTo('#geocoder')
        geocoder2.addTo('#geocoder2')

        //dom input elements
        var pickEl = document.getElementById('geocoder').querySelector(".mapboxgl-ctrl-geocoder--input")
        var dropEl = document.getElementById('geocoder2').querySelector(".mapboxgl-ctrl-geocoder--input")

        //onchange listeners
        pickEl.addEventListener("input", () => props.handleChangePickup(pickEl.value));
        dropEl.addEventListener("input", () => props.handleChangeDropoff(dropEl.value));

        //observing change in height and resizing map
        const myObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                map.resize()
            });
        });
        const targetNode = document.getElementById('map')
        myObserver.observe(targetNode)
    }, []);

    //updates location every time pickup state is changed.
    useEffect(() => {
        if (pickup.length > 1) return dirObj.setOrigin(pickup)
    }, [pickup]);

    //updates location every time dropoff state is changed.
    useEffect(() => {
        if (dropoff.length > 1) return dirObj.setDestination(dropoff)
    }, [dropoff]);

    useEffect(() => {
        if (props.currentPickup) return setPickup(props.currentPickup)
    }, [props.currentPickup]);

    useEffect(() => {
        if (props.currentDropoff) return setDropoff(props.currentDropoff)
    }, [props.currentDropoff]);

    useEffect(() => {
        if (props.stops.length >= 1) return addGeocoders()
        if (props.stops !== prevStop) {
            //remove stop
            console.log(prevStop)
            console.log(props.stops)
        }
    }, [props.stops]);

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    const geocoder2 = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    geocoder.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        setPickup(prev => prev = [lat, long])
    });

    geocoder2.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        setDropoff(prev => prev = [lat, long])
    });

    const testing = () => {
        console.log(pickup)
        console.log(mapObj)
        updateListeners()
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