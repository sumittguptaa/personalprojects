import React from "react"
import './App.css';
import { BrowserRouter as Router,Redirect,Route, Switch } from "react-router-dom"
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import User from "./components/user/User";
import Home from './components/Home'
const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'))
  return (
    <Router>
    <Switch>
        <Route path="/signin" exact ><Login /></Route>
        <Route path="/signup" exact ><Signup /></Route>
        <Route path='/users' exact ><User/></Route>
        <Route path='/' exact component={() => (!user ? <Redirect to='/signin' /> : <Home /> )} />
      </Switch>
    </Router>
  );
}

export default App;
