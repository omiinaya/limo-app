import React, { useEffect, useRef } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

//Northwest 175th Street, Hialeah, Florida 33015, United States

var mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;

//use props and ref to attach to another div
export default function App(props) {
    //console.log(props)

    const [mapObj, setMapObj] = React.useState(0)
    const [dirObj, setDirObj] = React.useState(0)
    const [pickup, setPickup] = React.useState([]);
    const [dropoff, setDropoff] = React.useState([]);
    const [geocoders, setGeocoders] = React.useState([]);
    const prevStop = usePrevious(props.stops);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }

    function addGeocoder(element) {
        var x = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
        
        x.addTo(element)

        x.on('result', (e) => {
            var lat = e.result.geometry.coordinates[0]
            var long = e.result.geometry.coordinates[1]
            //add waypoint on this
            console.log(lat, long)
        });

        var y = [...geocoders, x]
        setGeocoders(y)
    }

    function addWaypoint() {
        var waypoints = document.querySelectorAll('.waypoint-geocoder')
        waypoints.forEach((elem, index) => {
            if (index === waypoints.length - 1) {
                addGeocoder(elem)
                var input = elem.querySelector('.mapboxgl-ctrl-geocoder--input')
                var idx = parseInt(elem.id.split('-')[2]) //gets number from element id

                input.addEventListener("input", () => {
                    var stops = props.stops
                    stops[idx] = input.value
                    props.handleChangeStops(stops)
                });
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
        console.log(props.stops)
        //props.handleChangeStops(props.stops)
    }, [props.stops]);

    useEffect(() => {
        if (props.stops.length >= 1) addWaypoint()
        if (props.stops != prevStop && prevStop != undefined) {
            console.log(prevStop)
        }
    }, [props.stops.length]);

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
        setPickup([lat, long])
    });

    geocoder2.on('result', (e) => {
        var lat = e.result.geometry.coordinates[0]
        var long = e.result.geometry.coordinates[1]
        setDropoff([lat, long])
    });

    const testing = () => {
        console.log(pickup)
        console.log(mapObj)
        console.log(props.stops)
        console.log(geocoders)
        //geocoders[0].clear()
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