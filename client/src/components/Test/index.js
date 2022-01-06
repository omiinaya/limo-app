import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
//import { makeStyles } from '@material-ui/core/styles';

//const useStyles = makeStyles((theme) => ({ }));

export default function BasicButtonGroup() {
    //const classes = useStyles();
    const count = 0

    return (
        
            <ButtonGroup variant="contained" color="inherit">
                <Button><PeopleIcon /></Button>
                <Button><RemoveIcon /></Button>
                <Button
                    style={{ width: "40%" }}
                > {count} </Button>
                <Button><AddIcon /></Button>
            </ButtonGroup>
    
    );
}
