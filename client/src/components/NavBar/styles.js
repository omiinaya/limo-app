import { makeStyles } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'black',
        opacity: '0.30',
        position: 'relative'
    },
    title: {
        flexGrow: 1,
    },
}))

export default useStyles