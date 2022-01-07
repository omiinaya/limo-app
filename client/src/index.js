import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);