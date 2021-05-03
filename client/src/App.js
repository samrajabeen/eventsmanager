import React from "react";
import Counter from "./pages/Counter";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/header";
import Events from "./components/events";


function App() {
  return  (
    <>
    <Nav> Lenard </Nav>
    <Router>
      <Route exact path = "/"  component = {Home} />  
      <Route exact path = "/counter" component = {Counter} />
      <Route exact path = "/events" component = {Events} />
      
    </Router>

    </>
  )
}

export default App;
