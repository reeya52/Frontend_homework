import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Tabs/Home';
import Search from './Tabs/Serach';
import Houses from './Tabs/Houses';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Exercise 03 - React</h1>
      <Router>
        <Navbar bg="dark"/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/houses" component={Houses} />
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
