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
import Autocomplete from '@mui/material/Autocomplete';
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
//import styles from './styles';

const steps = ['Trip Details', 'Select Vehicle', 'Final Steps']
const services = ['Point-to-Point', 'Hourly/As Directed', 'From Airport', 'To Airport']
const acPickup = ['Use current location', '']
const acDropoff = ['Use current location', '']
const acStops = ['Use current location', 'test', '']
const seatTypes = ['Infact (Age 0-1)', 'Toddler (Age 1-3)', 'Booster (Age 3-5)']

function ReservePage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [service, setService] = React.useState(services[0]);
    const [date, setDate] = React.useState(getDate());
    const [time, setTime] = React.useState(getTime());
    const [pickup, setPickup] = React.useState('');
    const [dropoff, setDropoff] = React.useState('');
    const [passengers, setPassengers] = React.useState(1);
    const [luggage, setLuggage] = React.useState(0);
    const [stops, setStops] = React.useState([]);
    const [seats, setSeats] = React.useState([]);
    const [quantity, setQuantity] = React.useState([])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        handleTest()
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChangeService = (event) => {
        setService(event.target.value)
        console.log(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value)
        console.log(event.target.value);
    };

    const handleChangeTime = (event) => {
        setTime(event.target.value)
        console.log(event.target.value);
    };

    const handleChangePickup = (event, value) => {
        setPickup(value)
        console.log(value);
    };

    const handleChangeDropoff = (event, value) => {
        setDropoff(value)
        console.log(value);
    };

    const handleAddPassengers = () => {
        var value = passengers + 1
        setPassengers(value)
        console.log(value);
    };

    const handleRemovePassengers = () => {
        if (passengers > 1) {
            var value = passengers - 1
            setPassengers(value)
        } else {
            return
        }
        console.log(value);
    };

    const handleAddLuggage = () => {
        var value = luggage + 1
        setLuggage(value)
        console.log(value);
    };

    const handleRemoveLuggage = () => {
        if (luggage > 0) {
            var value = luggage - 1
            setLuggage(value)
        } else {
            return
        }
        console.log(value);
    };

    const handleAddStop = () => {
        var array = [...stops, ...['']]
        setStops(array)
        console.log(array)
    };

    const handleRemoveStop = (event, index) => {
        var i = index
        //this setup allows for multiple filters
        var x = stops.filter(function (eachElem, index) {
            return index !== i
        })
        setStops(x)
        console.log(x)
    }

    const handleChangeStop = (event, value, index) => {
        var array = [...stops]
        array[index] = value
        setStops(array)
        console.log(array)
    }

    const handleAddSeats = () => {
        var type = [...seats, ...['']]
        setSeats(type)
        var count = [...quantity, ...[0]]
        setQuantity(count)
        console.log(type)
        console.log(count)
    }

    const handleChangeSeats = (event, value, index) => {
        var array = [...seats]
        array[index] = value.props.value
        setSeats(array)
        console.log(array)
    }

    const handleRemoveSeat = (event, index) => {
        var i = index
        var x = seats.filter(function (eachElem, index) {
            return index !== i
        })
        var y = quantity.filter(function (eachElem, index) {
            return index !== i
        })
        setSeats(x)
        setQuantity(y)
        console.log(x)
        console.log(y)
    }

    const handleAddQuantity = (event, index) => {
        console.log(index)
        var array = [...quantity]
        array[index] = array[index] + 1
        setQuantity(array)
        console.log(array)
    };

    const handleRemoveQuantity = (event, index) => {
        console.log(index)
        var array = [...quantity]
        if (array[index] > 0) {
            array[index] = array[index] - 1
        }
        setQuantity(array)
        console.log(array)
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
        console.log(quantity)
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
                    <Box
                        display="flex"
                    >
                        <Box
                            sx={{ width: 400 }}
                        >
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
                            <Box
                                sx={{ mb: 1 }}
                            >
                                <Box
                                    style={{ display: 'flex' }}
                                >
                                    <Box
                                        id="geocoder"
                                        class="geocoder"
                                        style={{ width: '330px' }}
                                        sx={{ mr: 1 }}
                                    ></Box>
                                    <IconButton>
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
                                            mb={2}
                                            display='flex'
                                        >
                                            <IconButton disabled key={index}><ArrowRightIcon key={index} /></IconButton>
                                            <Autocomplete
                                                openOnFocus
                                                key={index}
                                                size="small"
                                                options={acStops}
                                                value={stops[index]}
                                                onChange={(event, value) => { handleChangeStop(event, value, index) }}
                                                sx={{ width: 310 }}
                                                renderInput={(params) => <TextField key={index} {...params}
                                                    label={"Stop Location " + (index + 1)}
                                                    InputLabelProps={{ shrink: true }}
                                                />}
                                            />
                                            <IconButton
                                                key={index}
                                                id={index}
                                                onClick={(event) => { handleRemoveStop(event, index) }}
                                            >
                                                <DeleteIcon key={index} />
                                            </IconButton>
                                        </Box>
                                    );
                                })}
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Autocomplete
                                    openOnFocus
                                    size="small"
                                    options={acDropoff}
                                    defaultValue={dropoff}
                                    onChange={handleChangeDropoff}
                                    sx={{ width: 380 }}
                                    renderInput={function (params) {
                                        return (
                                            <TextField {...params}
                                                label="Drop-off Location"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        )
                                    }
                                    }
                                />
                            </Box>
                            <Box
                                display='flex'
                                sx={{ mb: 1 }}
                            >
                                <Box
                                    sx={{ mr: 2 }}
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
                                                width: 63,
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
                                                            width: 170
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
                                                        onClick={(event) => { handleRemoveQuantity(event, index) }}
                                                        style={{ borderRight: '1px solid silver' }}
                                                    ><RemoveIcon style={{ width: 20 }} /></IconButton>
                                                    <IconButton
                                                        style={{
                                                            width: 40,
                                                            fontSize: 17,
                                                            borderRight: '1px solid silver'
                                                        }}
                                                    > {quantity[index]} </IconButton>
                                                    <IconButton
                                                        onClick={(event) => { handleAddQuantity(event, index) }}
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
                        <MapView />
                    </Box>
                </React.Fragment>
            ) : (activeStep === 1 ? (
                <React.Fragment>
                    <MapView />
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