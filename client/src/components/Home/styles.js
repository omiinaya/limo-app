import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var halfSpace   = 15
var singleSpace = halfSpace * 2
var doubleSpace = singleSpace * 2
var tripleSpace = singleSpace * 3
var bannerEdge  = window.screen.height/2 + singleSpace
var bannerMenu  = bannerEdge - tripleSpace + halfSpace
var homeMenu    = bannerEdge + singleSpace
var moreInfo    = homeMenu + tripleSpace
var services    = moreInfo + tripleSpace

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
        top: bannerMenu,
        left: 'calc(50% - 205px)',
    },
    homeMenu: {
        width: '100%',
        height: '30px',
        position: 'absolute',
        top: homeMenu,
        margin: '25px',
        zIndex: '2',
        left: 'calc(50% - 600px)',
    },
    moreInfo: {
        width: '100%',
        position: 'absolute',
        top: moreInfo
    },
    services: {
        width: '100%',
        position: 'absolute',
        top: services,
        margin: '25px'
    }
}))

export default useStyles