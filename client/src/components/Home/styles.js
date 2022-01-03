import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var halfSpace = 15
var singleSpace = halfSpace * 2
var doubleSpace = singleSpace * 2
var tripleSpace = singleSpace + doubleSpace
var bannerEdge = window.screen.height / 2 + singleSpace
var bannerMenu = bannerEdge - tripleSpace + halfSpace

const useStyles = makeStyles((theme) => ({
    root: {

    },
    main: {
        width: '100%',
        zIndex: '1',
    },
    carousel: {
        width: '100%',
        height: '550px',
        zIndex: '1',
    },
    bannerMenu: {
        width: '100%',
        position: 'absolute',
        top: bannerMenu,
        zIndex: '2',
        left: 'calc(50% - 208px)',
    },
    homeMenu: {
        zIndex: '2',
        width: '1100px',
        height: 'auto',
        margin: '0 auto',
        position: 'relative'
    },
    moreInfo: {
        width: '100%',
        margin: '25px'

    },
    services: {
        width: 'calc(100% - 100px)', //width - margin
        margin: '50px'
    },
    fleet: {
        width: 'calc(100% - 100px)',
        margin: '50px'
    }
}))

export default useStyles