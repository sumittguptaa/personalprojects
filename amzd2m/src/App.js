
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services'
import Products from './components/Products'
import Contactus from './components/Contactus'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="app">
    <Navbar/>
      <Switch>
      <Route path="/products"><Products/></Route>
      <Route path="/contact-us"><Contactus/></Route>
      <Route path="/services"><Services/></Route>
      <Route path="/">
      <Footer/>
      </Route>
      </Switch>
  </div>
  </Router>
  );
}

export default App;
