import React from 'react';
import Home from "./components/Home/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
