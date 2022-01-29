import React, { useState } from "react"
import './App.css';
import FileBase from "react-file-base64"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios"
import Home from "./Home";
import Dashboard from "./Dashboard";
function App() {
  

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard" exact ><Dashboard /></Route>
          <Route path="/" exact ><Home/></Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
