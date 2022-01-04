import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from "@mui/material/CssBaseline";
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