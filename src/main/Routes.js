import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Resume from "../content/Resume";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/home"} />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
  );
}

export default Routes;
