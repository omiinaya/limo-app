import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

const useStyles = makeStyles((theme) => ({
    root: {
        //
    },
    link: {
        display: 'flex',

    },
    icon: {
        marginRight: theme.spacing(0.5),
    },
    Typography: {
        fontSize: '17px',
        fontFamily: 'MyFont5',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}))

export default useStyles