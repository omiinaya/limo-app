import React from 'react';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppBar from "./components/AppBar"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </AppBar>
      </Router>
    );
  }
}

export default App;
