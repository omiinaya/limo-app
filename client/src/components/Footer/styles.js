import { makeStyles } from "@material-ui/core/styles";
//import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
//const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0, 0, 0, .90)",
    margin: '0px',
    justifyContent: "center",
    height: '45px'
  },
  leftContainer: {
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  },
  leftItems: {
    fontSize: '17px',
    fontFamily: 'MyFont4'
  },
  middleContainer: {
    flexGrow: 1,
    display: "flex",
  },
  middleItems: {
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: '17px',
    fontFamily: 'MyFont4'
  },
  rightContainer: {
    //
  },
  rightItems: {
    fontSize: '17px',
    fontFamily: 'MyFont4'
  }
}));

export default useStyles;
