import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    Banner: {
        width: '100%',
        position: 'relative',
        borderRadius: 0,
    },
    Media: {
        backgroundColor: 'white',
        height: '345px',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    },
    BannerGrid: {
        height: '100%',
        position: 'relative'
    },
}))

export default useStyles