import { makeStyles } from '@material-ui/core/styles';
import { constants } from "../../scripts"
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

console.log(constants.indicHeight())

const useStyles = makeStyles((theme) => ({
    root: {
        //
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
        height: constants.singleSpace(),
        margin: '0 auto',
        paddingTop: constants.singleSpace(),
        paddingBottom: constants.halfSpace
    },
    moreInfo: {
        width: '100%',
        marginTop: constants.singleSpace(),
        marginBottom: constants.halfSpace,
        position: 'relative',
        zIndex: 2,
    },
    sections: {
        width: 'calc(100% - 100px)', //width - margin
        margin: '50px',
        position: 'relative',
        zIndex: 2,
    },
    footer: {
        position: 'fixed',
        zIndex: '5 !important',
        bottom: 0,
        width: '100%',
        height: 'auto'
    },
    mottoMenu: {
        width: '100%',
        marginBottom: constants.tripleSpace(),
        position: 'relative',
        zIndex: 2,
        left: 'calc(50% - 115px)',
    },
    modal: {
        
    }
}))

export default useStyles