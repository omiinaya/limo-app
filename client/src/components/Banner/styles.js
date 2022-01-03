import { makeStyles } from '@material-ui/core/styles';
import { constants } from "../../scripts"
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    Banner: {
        width: '100%',
        height: constants.bannerEdge(),
        borderRadius: 0,
    },
    Media: {
        backgroundColor: 'white',
        height: constants.bannerEdge(),
        width: '100%',
        overflow: 'hidden',
    },
    BannerGrid: {
        height: constants.bannerEdge(),
    },
}))

export default useStyles