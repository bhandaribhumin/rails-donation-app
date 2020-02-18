import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Artists from "../components/Artists";
import Artist from "../components/Artist";
export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/artists" exact component={Artists} />
      <Route path="/artist/:id" exact component={Artist} />
    </Switch>
  </Router>
);