import React from "react";
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
