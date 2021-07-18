import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/home"} />
      </Route>
    </Switch>
  );
}

export default Routes;
