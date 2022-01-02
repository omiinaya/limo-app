import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var bannerEdge = window.screen.height/2 + 30

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'absolute',
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
        width: '500px',
        height: '200px',
        position: 'absolute',
        top: bannerEdge + 30
    }
}))

export default useStyles