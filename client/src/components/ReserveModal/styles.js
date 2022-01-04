import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        margin: '115px',
        zIndex: '10 !important',
        border: '2px black solid',
        borderRadius: '5px',
        padding: '20px'
    },
}))

export default useStyles