import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Home from './Home';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Checkout from './Checkout';
import fire from './firebase'
import { StateContext } from './StateProvider';
import Payment from './Payment';
import Productinfo from './Productinfo';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Register from "./Register"
import Profile from "./Profile"
import Thanks from "./Thanks"

const promise = loadStripe('pk_test_51HchrpEta3YlVPic2li7k83VgHH9ehemOscqMNkRjdnFEiRPvlL6cXd5QEQr7cDF4KILa5mci2XL3MLjyXA993aO00ALBYRRlc');

function App() {
  const [{basket , user} , dispatch] = useContext(StateContext)
  useEffect(() =>{
          const unsubscribe = fire.auth().onAuthStateChanged((user) =>{    
            if(user){
          
                dispatch({
                  type: "SET_USER",
                  user: user,
                });
            }
            else{
              dispatch({
                type: "SET_USER",
                user: null,
              });
            }
          });
          return() =>{
          unsubscribe();
          }
  },[])
  return (

    <Router>
    <div className="App">
     
    <Switch>
      <Route path="/orders"><Header/><Orders/></Route>
      <Route path="/cart"><Header/><Checkout/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/register"><Register/></Route>
      <Route path="/payment"><Header/> <Elements stripe={promise} ><Payment/></Elements> </Route>
      <Route path="/product/:id"><Header/> <Productinfo/></Route>
      <Route path="/profile"><Profile/></Route>
      <Route path="/thankyou"><Thanks/></Route>
      <Route path="/"><Header/><Home/></Route>
      
    </Switch>
    </div>
    </Router>
  );
  
}

export default App;



