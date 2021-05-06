import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import "./App.css";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' >
              {isLoggedIn ? <Home /> : 
              <Redirect to="/sign-in"/> }
            </Route>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path = "/events" component = {Events} />
            <Route exact path = "/contact" component = {Contact} />
            <Route exact path = "/admin" component = {Admin} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}




export default App;
