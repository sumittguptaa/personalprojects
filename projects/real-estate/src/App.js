import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from './Login';
import Home from './Home';
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" component={Home} ></Route>
          <Route path="/login" component={Login} > </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
