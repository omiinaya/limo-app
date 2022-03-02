import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MapView from '../MapView';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { getDate, getTime } from "../../scripts"

const steps = ['Trip Details', 'Select Vehicle', 'Final Steps']
const services = ['Point-to-Point', 'Hourly/As Directed', 'From Airport', 'To Airport']
const seatTypes = ['Infant (Age 0-1)', 'Toddler (Age 1-3)', 'Booster (Age 3-5)']

function ReservePage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [service, setService] = React.useState(services[0]);
    const [date, setDate] = React.useState(getDate());
    const [time, setTime] = React.useState(getTime());
    const [pickup, setPickup] = React.useState('');
    const [dropoff, setDropoff] = React.useState('');
    const [currentP, setCurrentP] = React.useState('');
    const [currentD, setCurrentD] = React.useState('');
    const [passengers, setPassengers] = React.useState(1);
    const [luggage, setLuggage] = React.useState(0);
    const [seats, setSeats] = React.useState([]);
    const [stops, setStops] = React.useState([]);
    const [seatQuantity, setSeatQuantity] = React.useState([])
    const [stopQuantity, setStopQuantity] = React.useState([])

    //form
    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleReset = () => setActiveStep(0);

    //change
    const handleChangeService = (event) => setService(event.target.value);
    const handleChangeDate = (event) => setDate(event.target.value);
    const handleChangeTime = (event) => setTime(event.target.value);
    const handleChangePickup = (value) => setPickup(value);
    const handleChangeDropoff = (value) => setDropoff(value)
    const handleChangeSeats = (event, value, index) => {
        var array = [...seats]
        array[index] = value.props.value
        setSeats(array)
    }
    const handleChangeStops = (index) => {
        console.log(index)
        //'[id^="waypoint-geocoder-"]'
        var stopList = document.querySelectorAll('[id^="waypoint-geocoder-"]');
        console.log(stopList)
    }

    //add
    const handleAddPassengers = () => setPassengers(passengers + 1)
    const handleAddLuggage = () => setLuggage(luggage + 1)
    const handleAddSeatQuantity = (event, index) => {
        var array = [...seatQuantity]
        array[index] = array[index] + 1
        setSeatQuantity(array)
    };
    const handleAddSeats = () => {
        setSeats([...seats, ...['']])
        setSeatQuantity([...seatQuantity, ...[0]])
    }
    const handleAddStop = () => {
        setStops([...stops, ...['']])
        setStopQuantity([...stopQuantity, ...[0]])
    }

    //remove
    const handleRemovePassengers = () => { if (passengers > 1) setPassengers(passengers - 1) };
    const handleRemoveLuggage = () => { if (luggage > 0) setLuggage(luggage - 1) };
    const handleRemoveSeat = (event, idx) => {
        var x = seats.filter((elem, index) => index !== idx)
        var y = seatQuantity.filter((elem, index) => index !== idx)
        setSeats(x)
        setSeatQuantity(y)
    }
    const handleRemoveStop = (event, idx) => {
        var x = stops.filter((elem, index) => index !== idx)
        var y = stopQuantity.filter((elem, index) => index !== idx)
        setStops(x)
        setStopQuantity(y)
    }
    const handleRemoveSeatQuantity = (event, index) => {
        var array = [...seatQuantity]
        if (array[index] > 0) array[index] = array[index] - 1
        setSeatQuantity(array)
    };

    const handleTest = () => {
        console.log(service)
        console.log(date)
        console.log(time)
        console.log(pickup)
        console.log(dropoff)
        console.log(passengers)
        console.log(luggage)
        console.log(stops)
        console.log(seats)
        console.log(seatQuantity)
        console.log(currentP)
    }

    const currentLocationP = async () => {
        var pickEl = document.getElementById('geocoder').querySelector(".mapboxgl-ctrl-geocoder--input")
        navigator.geolocation.getCurrentPosition(async function (position) {
            let token = process.env.REACT_APP_MAP_KEY;
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            const location = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}`)
                .catch(error => {
                    console.error('Error:', error);
                });
            let result = await location.json();
            if (!result) return
            console.log(result.features[0])
            console.log(result.features[0].geometry.coordinates)
            pickEl.value = result.features[0].place_name
            handleChangePickup(pickEl.value)
            setCurrentP(result.features[0].geometry.coordinates)
        });
    }

    const currentLocationD = async () => {
        var dropEl = document.getElementById('geocoder2').querySelector(".mapboxgl-ctrl-geocoder--input")
        navigator.geolocation.getCurrentPosition(async function (position) {
            let token = process.env.REACT_APP_MAP_KEY;
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            const location = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}`)
                .catch(error => {
                    console.error('Error:', error);
                });
            let result = await location.json();
            if (result) {
                console.log(result.features[0])
                dropEl.value = result.features[0].place_name
                handleChangeDropoff(dropEl.value)
                setCurrentD(result.features[0].geometry.coordinates)
            }
        });
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper
                activeStep={activeStep}
                sx={{ mt: 2 }}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Typography sx={{ mt: 2, mb: 2 }}>Step {activeStep + 1}</Typography>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                </React.Fragment>
            ) : (activeStep === 0 ? (
                <React.Fragment>
                    <Box display="flex">
                        <Box sx={{ width: 400 }} >
                            <FormControl>
                                <InputLabel>Service</InputLabel>
                                <Select
                                    size="small"
                                    value={service}
                                    label="Service"
                                    onChange={handleChangeService}
                                    sx={{
                                        width: 380
                                    }}
                                >
                                    {services.map((service, index) => {
                                        return (
                                            <MenuItem value={service} key={index}>{service}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            <Box
                                display="flex"
                                bgcolor="background.paper"
                            >
                                <Box alignSelf="center">
                                    <TextField
                                        id="date"
                                        label="Date"
                                        size="small"
                                        type="date"
                                        defaultValue={date}
                                        onChange={handleChangeDate}
                                        sx={{
                                            width: 200
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Box>
                                <Box
                                    m={2}
                                    alignSelf="center">
                                    <TextField
                                        size="small"
                                        id="time"
                                        label="Time"
                                        type="time"
                                        defaultValue={time}
                                        onChange={handleChangeTime}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        sx={{
                                            width: 165
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ mb: 1 }}>
                                <Box style={{ display: 'flex' }}>
                                    <Box
                                        id="geocoder"
                                        className="geocoder"
                                        style={{ width: '333px' }}
                                        sx={{ mr: 0.3 }}
                                    />
                                    <IconButton onClick={currentLocationP}>
                                        <MyLocationIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ mb: 1 }}>
                                <Button
                                    color="primary"
                                    onClick={handleAddStop}
                                >
                                    <AddIcon style={{ width: 20, fontSize: 17 }} />
                                    Add Stop
                                </Button>
                            </Box>
                            <Box>
                                {stops.map((stop, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            ml={-2}
                                            mb={2}
                                            display='flex'
                                            key={index}
                                        >
                                            <IconButton disabled><ArrowRightIcon /></IconButton>
                                            <Box
                                                id={`waypoint-geocoder-${index}`}
                                                className={`waypoint-geocoder`}
                                                style={{ width: '300px' }}
                                                sx={{ mr: 0.3 }}
                                            />{index}
                                            <IconButton
                                                key={index}
                                                id={index}
                                                onClick={(event) => { handleRemoveStop(event, index) }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Box style={{ display: 'flex' }}>
                                    <Box
                                        id="geocoder2"
                                        className="geocoder2"
                                        style={{ width: '333px' }}
                                        sx={{ mr: 0.3 }}
                                    />
                                    <IconButton onClick={currentLocationD}>
                                        <MyLocationIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box
                                display='flex'
                                sx={{ mb: 1 }}
                            >
                                <Box sx={{ mr: 2 }} >
                                    <ButtonGroup
                                        size="small"
                                        variant="outlined"
                                        color="inherit"
                                        style={{
                                            border: '1px solid silver',
                                            borderRadius: '3px'
                                        }}
                                    >
                                        <IconButton
                                            style={{ borderRight: '1px solid silver' }}
                                        ><PeopleIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton
                                            onClick={handleRemovePassengers}
                                            style={{ borderRight: '1px solid silver' }}
                                        ><RemoveIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton
                                            style={{
                                                width: 63,
                                                fontSize: 17,
                                                borderRight: '1px solid silver'
                                            }}
                                        > {passengers} </IconButton>
                                        <IconButton onClick={handleAddPassengers}><AddIcon style={{ width: 20 }} /></IconButton>
                                    </ButtonGroup>
                                </Box>
                                <Box>
                                    <ButtonGroup
                                        size="small"
                                        variant="outlined"
                                        color="inherit"
                                        style={{
                                            border: '1px solid silver',
                                            borderRadius: '3px'
                                        }}
                                    >
                                        <IconButton
                                            style={{ borderRight: '1px solid silver' }}
                                        ><WorkIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton
                                            onClick={handleRemoveLuggage}
                                            style={{ borderRight: '1px solid silver' }}
                                        ><RemoveIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton
                                            style={{
                                                width: 60,
                                                fontSize: 17,
                                                borderRight: '1px solid silver'
                                            }}> {luggage} </IconButton>
                                        <IconButton onClick={handleAddLuggage}><AddIcon style={{ width: 20 }} /></IconButton>
                                    </ButtonGroup>
                                </Box>
                            </Box>
                            <Box sx={{ mb: 1 }}>
                                <Button color="primary" onClick={handleAddSeats}>
                                    <AddIcon style={{ width: 20, fontSize: 17 }} />
                                    Add Child Seat
                                </Button>
                            </Box>
                            <Box
                                style={{
                                    width: '393px'
                                }}
                            >
                                {seats.map((seat, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            ml={-2}
                                            mb={2}
                                            display='flex'
                                        >
                                            <IconButton disabled key={index}><ArrowRightIcon key={index} /></IconButton>
                                            <Box
                                                mr={2}
                                            >
                                                <FormControl>
                                                    <InputLabel>Child Seat {(index + 1)}</InputLabel>
                                                    <Select
                                                        size="small"
                                                        value={(seats[index] === '') ? (seatTypes[0]) : (seats[index])}
                                                        label={"Child Seat x"}
                                                        onChange={(event, value) => { handleChangeSeats(event, value, index) }}
                                                        sx={{
                                                            width: 174
                                                        }}
                                                    >
                                                        {seatTypes.map((type, index) => {
                                                            return (
                                                                <MenuItem value={type} key={index}>{type}</MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            <Box
                                                display='flex'
                                            >
                                                <ButtonGroup
                                                    size="small"
                                                    variant="outlined"
                                                    color="inherit"
                                                    style={{
                                                        border: '1px solid silver',
                                                        borderRadius: '3px'
                                                    }}
                                                >
                                                    <IconButton
                                                        onClick={(event) => { handleRemoveSeatQuantity(event, index) }}
                                                        style={{ borderRight: '1px solid silver' }}
                                                    ><RemoveIcon style={{ width: 20 }} /></IconButton>
                                                    <IconButton
                                                        style={{
                                                            width: 40,
                                                            fontSize: 17,
                                                            borderRight: '1px solid silver'
                                                        }}
                                                    > {seatQuantity[index]} </IconButton>
                                                    <IconButton
                                                        onClick={(event) => { handleAddSeatQuantity(event, index) }}
                                                    ><AddIcon style={{ width: 20 }} /></IconButton>
                                                </ButtonGroup>
                                                <IconButton
                                                    key={index}
                                                    id={index}
                                                    onClick={(event) => { handleRemoveSeat(event, index) }}
                                                >
                                                    <DeleteIcon key={index} />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                        <MapView
                            handleChangePickup={handleChangePickup}
                            handleChangeDropoff={handleChangeDropoff}
                            handleChangeStops={handleChangeStops}
                            currentPickup={currentP}
                            currentDropoff={currentD}
                            stops={stops}
                        />
                    </Box>
                </React.Fragment>
            ) : (activeStep === 1 ? (
                <React.Fragment>
                    placeholder
                </React.Fragment>
            ) : (
                <React.Fragment>
                    placeholder
                </React.Fragment>
            )
            )
            )}
            {activeStep === steps.length ? (
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
            ) : (
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleTest}>
                        test
                    </Button>
                    <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
            )}
        </Box>
    );
}

export default ReservePage