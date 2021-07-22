import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./main/Home";

function App() {
  return (
    <Switch>
      <Route path ="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
