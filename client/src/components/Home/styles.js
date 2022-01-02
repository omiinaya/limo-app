import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var bannerEdge = window.screen.height/2 + 30
var homeMenu = bannerEdge + 35
var services = homeMenu + 40

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
    homeMenu: {
        width: '100%',
        height: '30px',
        position: 'absolute',
        top: homeMenu,
        margin: '25px',
        left: 'calc(50% - 600px)',
    },
    services: {
        width: '100%',
        position: 'absolute',
        top: services,
        margin: '25px'
    }
}))

export default useStyles