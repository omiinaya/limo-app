import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var bannerHeight = window.screen.height/2 + 30

const useStyles = makeStyles((theme) => ({
    Banner: {
        width: '100%',
        height: bannerHeight,
        borderRadius: 0,
    },
    Media: {
        backgroundColor: 'white',
        height: bannerHeight,
        width: '100%',
        overflow: 'hidden',
    },
    BannerGrid: {
        height: bannerHeight,
    },
}))

export default useStyles