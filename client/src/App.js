import React from "react";
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <React.Fragment>
          <CssBaseline />
          <Router>
            <NavBar
              content={
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                </Switch>
              }
            />
          </Router>
        </React.Fragment>
      </ParallaxProvider>
    );
  }
}

export default App;
