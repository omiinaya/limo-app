import React from 'react';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from "./components/NavBar"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </NavBar>
      </Router>
    );
  }
}

export default App;
