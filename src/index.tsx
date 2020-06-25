import * as React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./pages/Home";
import About from "./pages/About";
export const history = createHistory();

ReactDOM.render(
  <Router history={createHistory()}>
    <Switch>
      <Route path="/about" exact sensitive component={About}></Route>
      <Route path="/" exact sensitive component={Home}></Route>
      <Redirect from="/a" to="/latest-insights" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
