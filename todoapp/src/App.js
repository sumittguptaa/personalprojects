import React,{Component} from 'react';
import './App.css';
import Navi from './Components/Nav'
import ProductList from './Components/ProductList'
import {Switch ,Route, Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  
    return(
      <div className="App">
        <Navi />
        <Router>
        
        <Switch>
          <Route exact path='/' component={ProductList} />
        </Switch>
        </Router>
      <ProductList />
      </div>
    );
  
}

export default App
