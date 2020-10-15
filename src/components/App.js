import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import About from "./About.js";
import ItemDetails from "./ItemDetails.js";

const App = (props) => {
  return (
    <Router>
      <>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items/:itemId">
            <ItemDetails />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
