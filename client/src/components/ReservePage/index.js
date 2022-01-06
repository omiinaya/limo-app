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
import Test from '../Test';
//import styles from './styles';

const steps = ['Ride Details', 'Select Vehicle', 'Final Steps'];
const services = ['Point-to-Point', 'Hourly/As Directed', 'From Airport', 'To Airport']
const autocomplete = ['Select a location', 'Use current location']

function ReservePage() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [service, setService] = React.useState(services[0]);
    const [date, setDate] = React.useState('2017-05-24');
    const [time, setTime] = React.useState("07:30");
    const [pickup, setPickup] = React.useState(autocomplete[0]);
    const [dropoff, setDropoff] = React.useState(autocomplete[0]);
    const count = 0

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log({ activeStep, service, date, time, pickup, dropoff })
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
                        <FormControl
                            sx={{ width: 415 }}
                        >
                            <InputLabel>Service</InputLabel>
                            <Select
                                value={service}
                                label="Service"
                                onChange={handleChangeService}
                                sx={{
                                    width: 400
                                }}
                            >
                                {services.map((service, index) => {
                                    return (
                                        <MenuItem value={service} key={index}>{service}</MenuItem>
                                    );
                                })}
                            </Select>
                            <Box
                                display="flex"
                                //flexDirection="row" This is the default
                                //p={1}
                                //m={1}
                                bgcolor="background.paper"
                            >
                                <Box alignSelf="center">
                                    <TextField
                                        id="date"
                                        label="Date"
                                        type="date"
                                        defaultValue={date}
                                        onChange={handleChangeDate}
                                        sx={{
                                            width: 220
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
                                sx={{ mb: 2 }}
                            >
                                <Autocomplete
                                    openOnFocus
                                    options={autocomplete}
                                    defaultValue={pickup}
                                    onChange={handleChangePickup}
                                    sx={{ width: 400 }}
                                    renderInput={(params) => <TextField {...params}
                                        label="Pick-Up Location"
                                        InputLabelProps={{ shrink: true }}
                                    />}
                                />
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Autocomplete
                                    openOnFocus
                                    options={autocomplete}
                                    defaultValue={dropoff}
                                    onChange={handleChangeDropoff}
                                    sx={{ width: 400 }}
                                    renderInput={(params) => <TextField {...params}
                                        label="Drop-Off Location"
                                        InputLabelProps={{ shrink: true }}
                                    />}
                                />
                            </Box>
                            <Box display='flex'>
                                <Box
                                    sx={{ mr: 2 }}
                                    style={{
                                        border: '1px solid lightgray',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <ButtonGroup variant="contained" color="inherit" style={{ height: 40 }}>
                                        <IconButton><PeopleIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton><RemoveIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton style={{ width: 70 }}> {count} </IconButton>
                                        <IconButton><AddIcon style={{ width: 20 }} /></IconButton>
                                    </ButtonGroup>
                                </Box>
                                <Box
                                    style={{
                                        border: '1px solid lightgray',
                                        borderRadius: '5px'
                                    }}
                                >
                                    <ButtonGroup variant="contained" color="inherit" style={{ height: 40 }}>
                                        <IconButton><WorkIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton><RemoveIcon style={{ width: 20 }} /></IconButton>
                                        <IconButton style={{ width: 70 }}> {count} </IconButton>
                                        <IconButton><AddIcon style={{ width: 20 }} /></IconButton>
                                    </ButtonGroup>
                                </Box>
                            </Box>
                        </FormControl>
                        <MapView />
                    </Box>
                </React.Fragment>
            ) : (activeStep === 1 ? (
                <React.Fragment>
                    <Test />
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
                    <Button onClick={() => {
                        console.log(service)
                        console.log(date)
                        console.log(time)
                        console.log(pickup)
                        console.log(dropoff)
                    }}>
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