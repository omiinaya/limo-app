import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const steps = ['Ride Details', 'Select Vehicle', 'Final Steps'];
const services = ['Point-to-Point', 'Hourly/As Directe', 'From Airport', 'To Airport']
const autocomplete = ['Use current location']

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [service, setService] = React.useState(0);
    const [date, setDate] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [pickup, setPickup] = React.useState(0);
    const [dropoff, setDropoff] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChangeService = (event) => {
        setService(event.target.value)
        console.log(service);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value)
        console.log(date);
    };

    const handleChangeTime = (event) => {
        setTime(event.target.value)
        console.log(time);
    };

    const handleChangePickup = (event) => {
        setPickup(event.target.value)
        console.log(event.target)
        console.log(pickup);
    };

    const handleChangeDropoff = (event) => {
        setDropoff(event.target.value)
        console.log(dropoff);
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
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                </React.Fragment>
            ) : (activeStep === 0 ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 2 }}>Step {activeStep + 1}</Typography>
                    <Box
                        display="flex"
                    >
                        <FormControl
                            alignSelf="center"
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
                                        <MenuItem value={index} key={index}>{service}</MenuItem>
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
                                        defaultValue="2017-05-24"
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
                                        defaultValue="07:30"
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
                                    onChange={handleChangePickup}
                                    sx={{ width: 400 }}
                                    renderInput={(params) => <TextField {...params}
                                        label="Pick-Up Location"
                                        InputLabelProps={{ shrink: true }}
                                    />}
                                />
                            </Box>
                            <Box>
                                <Autocomplete
                                    openOnFocus
                                    options={autocomplete}
                                    onChange={handleChangeDropoff}
                                    sx={{ width: 400 }}
                                    renderInput={(params) => <TextField {...params} 
                                    label="Drop-Off Location" 
                                    InputLabelProps={{ shrink: true }}
                                    />}
                                />
                            </Box>
                        </FormControl>
                        <Box>
                            map
                        </Box>
                    </Box>
                </React.Fragment>
            ) : (activeStep === 1 ? (
                <React.Fragment>
                    Step 2
                </React.Fragment>
            ) : (
                <React.Fragment>
                    Step 3
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
                    <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Box>
            )}
        </Box>
    );
}
