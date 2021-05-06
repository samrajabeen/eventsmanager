import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navi from "./components/nav";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";


function App() {
  return  (
    <>
    <Navi> Lenard </Navi>
    <Router>
      <Route exact path = "/"  component = {Home} />  
      <Route exact path = "/events" component = {Events} />
      <Route exact path = "/contact" component = {Contact} />
      <Route exact path = "/admin" component = {Admin} />
    </Router>

    </>
  )
}

export default App;
