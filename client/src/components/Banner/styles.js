import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    Banner: {
        width: '100%',
        position: 'relative',
    },
    Media: {
        backgroundColor: 'white',
        height: '500px',
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