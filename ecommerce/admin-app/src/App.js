import './App.css';
import Layout from './components/Layout/Layout';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from './containers/Home/Home';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/signin" component={Signin} ></Route>
          <Route path="/signup" component={Signup} ></Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
