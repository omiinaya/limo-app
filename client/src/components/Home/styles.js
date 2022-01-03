import { makeStyles } from '@material-ui/core/styles';
import { constants } from "../../scripts"
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

console.log(constants.bannerEdge())

const useStyles = makeStyles((theme) => ({
    root: {

    },
    main: {
        width: '100%',
        position: 'relative',
        zIndex: 1,
    },
    sub: {
        backgroundColor: 'white',
        width: '100%',
        position: 'relative',
        zIndex: 2,
        //borderBottom: '2px black solid'
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
        top: constants.bannerMenu(),
        zIndex: 2,
        left: 'calc(50% - 208px)',
    },
    homeMenu: {
        width: '1100px',
        height: '50px',
        margin: '0 auto',
        paddingTop: constants.singleSpace()
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