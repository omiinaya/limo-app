import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

var bannerHeight = window.screen.height/2 + 30

const useStyles = makeStyles((theme) => ({
    Banner: {
        width: '100%',
        height: bannerHeight,
        position: 'relative',
        borderRadius: 0
    },
    Media: {
        backgroundColor: 'white',
        height: bannerHeight,
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    BannerGrid: {
        height: '100%',
        height: bannerHeight,
        position: 'relative'
    },
}))

export default useStyles