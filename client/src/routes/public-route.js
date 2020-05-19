import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "views/home";
import Login from "views/login";
import Signup from "views/signup";

const PublicRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

export default PublicRoute;
