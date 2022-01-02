import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: "#8A9A5B !important",
        borderRadius: '0px !important',
        height: '60px',
        width: '200px',
        border: '2px white solid !important'
    }
}))

export default useStyles