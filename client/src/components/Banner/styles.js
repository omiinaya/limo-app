import { makeStyles } from '@material-ui/core/styles';
//import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
//const breakpoints = createBreakpoints({})

  const halfSpace = 15
  const singleSpace = halfSpace * 2
  const doubleSpace = singleSpace * 2
  const tripleSpace = singleSpace + doubleSpace
  const bannerEdge = window.screen.height / 2 + doubleSpace

const useStyles = makeStyles((theme) => ({
    Banner: {
        width: '100%',
        height: bannerEdge,
        borderRadius: 0,
    },
    Media: {
        backgroundColor: 'white',
        height: bannerEdge,
        width: '100%',
        overflow: 'hidden',
    },
    BannerGrid: {
        height: bannerEdge,
    },
}))

export default useStyles