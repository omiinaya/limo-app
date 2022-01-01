import { makeStyles } from "@material-ui/core/styles";
//import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
//const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0, 0, 0, .75)",
    position: "fixed",
    height: '90px',
    margin: '0px',
    justifyContent: "center"
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 1,
    display: "flex",
  },
  item: {
    marginLeft: "10px",
    marginRight: "10px",
  },
  edge: {
    //
  },
}));

export default useStyles;
