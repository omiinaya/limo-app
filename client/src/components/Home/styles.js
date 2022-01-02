import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var bannerEdge = window.screen.height/2 + 30

const useStyles = makeStyles((theme) => ({
    root: {

    },
    mainContainer: {
        width: '100%',
        
        zIndex: '1',
    },
    carousel: {
        width: '100%',
        height: '550px',
        position: 'absolute',
        zIndex: '1',
    },
    bannerMenu: {
        width: '100%',
        position: 'absolute',
        zIndex: '2',
        top: '475px',
        left: 'calc(50% - 205px)',
    },
    services: {
        width: '100%',
        position: 'absolute',
        top: bannerEdge,
        margin: '25px'
    }
}))

export default useStyles