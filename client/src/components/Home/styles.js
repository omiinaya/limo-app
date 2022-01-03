import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var halfSpace = 15
var singleSpace = halfSpace * 2
var doubleSpace = singleSpace * 2
var tripleSpace = singleSpace + doubleSpace
var bannerEdge = window.screen.height / 2 + doubleSpace
var bannerMenu = bannerEdge - tripleSpace + halfSpace

const useStyles = makeStyles((theme) => ({
    root: {

    },
    main: {
        width: '100%',
        position: 'relative',
        zIndex: 1,
    },
    mid: {
        backgroundColor: 'white',
        border: 'red 2px solid',
        width: '100%',
        position: 'relative',
        zIndex: 2,
    },
    sub: {
        //
    },
    carousel: {
        width: '100%',
        height: 'auto',
        position: 'relative',
        zIndex: 1,
    },
    bannerMenu: {
        width: '100%',
        position: 'absolute',
        top: bannerMenu,
        zIndex: 2,
        left: 'calc(50% - 208px)',
    },
    homeMenu: {
        zIndex: '2',
        width: '1100px',
        height: 'auto',
        margin: '0 auto',
        marginTop: doubleSpace,
        position: 'relative'
    },
    moreInfo: {
        width: '100%',
        marginTop: '50px',
        marginBottom: '5p0x',
        position: 'relative',
        zIndex: 2,
    },
    sections: {
        width: 'calc(100% - 100px)', //width - margin
        margin: '50px',
        position: 'relative',
        zIndex: 2,
    }
}))

export default useStyles