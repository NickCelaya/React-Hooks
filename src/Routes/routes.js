import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./../Components/welcome";
import Hooks from "../Components/hooksComponent";
import Class from "../Components/classComponent";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/class" component={Class} />
      </Switch>
    </Router>
  );
};

export default Routes;
