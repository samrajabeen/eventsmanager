import React from "react";
import Counter from "./pages/Counter";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/header";

function App() {
  return  (
    <>
    <Nav name="Phil"> Lenard </Nav>
    <Router>
      <Route exact path = "/"  component = {Home} />  
      <Route exact path = "/counter" component = {Counter} />
      
    </Router>

    </>
  )
}

export default App;
