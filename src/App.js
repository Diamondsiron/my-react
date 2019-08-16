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
import store from './redux/store'
import Example01 from './pages/useReducer/text1'
import Example02 from './pages/useReducer/text2'
import Example03 from './pages/useReducer/text3'
import Example04 from './pages/useReducer/text4'
import Example05 from './pages/useReducer/text5'
import Example06 from './pages/useReducer/text6'
import Context from './pages/context'
import Rxjs from './pages/rxjs'
import TodoApp from './pages/TodoAPP'
import Thunk from './pages/thunk'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Router>
          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/Home" component={Home}></Route> 
            <Route path="/car" component={Car}></Route> 
            <Route path="/list" component={list}></Route> 
            <Route path="/checkIn" component={checkIn}></Route> 
            <Route path="/Example01" component={Example01}></Route> 
            <Route path="/Example02" component={Example02}></Route> 
            <Route path="/Example03" component={Example03}></Route> 
            <Route path="/Example04" component={Example04}></Route> 
            <Route path="/Example05" component={Example05}></Route> 
            <Route path="/Example06" component={Example06}></Route> 
            <Route path="/Context" component={Context}></Route> 
            <Route path="/Rxjs" component={Rxjs}></Route> 
            <Route path="/TodoApp" component={TodoApp}></Route> 
            <Route path="/Thunk" component={Thunk}></Route> 
            <Route  component={NoMatch}></Route> 
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
