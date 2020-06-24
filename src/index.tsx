import * as React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Redirect exact from="/about" to="/about" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
