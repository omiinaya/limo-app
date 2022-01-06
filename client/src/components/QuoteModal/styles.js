import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        borderRadius: '2%'
    },
    button: {
        backgroundColor: "#8A9A5B !important",
        borderRadius: '0px !important',
        height: '60px',
        width: '200px',
        border: '2px white solid !important',
        color: 'white',
        fontSize: '17px',
        fontFamily: 'MyFont5'
    }
}))

export default useStyles