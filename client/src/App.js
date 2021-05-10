import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import ShowEvents from "./pages/ShowEvents";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import "./App.css";
import EventCreate from "./components/eventCreate";




function App() {

  return (<Router>
    
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path= '/' component={Login} />
            <Route exact path= "/sign-up" component={SignUp} />
            <Route exact path = "/home" component = {Home} />
            <Route exact path = "/events" component = {EventCreate} />
            <Route exact path = "/showevents" component = {ShowEvents} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/admin" component = {Admin}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}




export default App;
