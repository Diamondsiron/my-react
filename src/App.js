import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import { browserHistory } from 'react-router';
//import logo from './logo.svg';
import './App.css';
import Car from './pages/concierge/concierge-add-car'
import list from './pages/concierge/concierge-check-list.vue'
import checkIn from './pages/concierge/concierge-checkin'
import Header from './components/header-nav-bar/index'
import Home from './pages/home'
import NoMatch from './pages/NoMatch'
import { Provider } from 'react-redux'
import store from './actions/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Router>
          <Switch>
            <Route path="/Home" component={Home}></Route> 
            <Route path="/car" component={Car}></Route> 
            <Route path="/list" component={list}></Route> 
            <Route path="/checkIn" component={checkIn}></Route> 
            <Route  component={NoMatch}></Route> 
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
